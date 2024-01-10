import puppeteer from 'puppeteer';

import {
  CurrencyConversionQuery,
  SUPPORTED_CURRENCIES,
  SupportedCurrency,
  currencyStringToNumberRepresentation,
} from 'utils/currency';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const BASE_URL = 'https://www.xe.com';
const CONVERT_ENDPOINT_URL = `${BASE_URL}/currencyconverter/convert`;

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class XEService {
  private static instance: XEService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new XEService();
    }

    return this.instance;
  }

  private async fetchConversion({ amount, source, target }: CurrencyConversionQuery): Promise<string> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const queryURL = new URL(CONVERT_ENDPOINT_URL);

    queryURL.searchParams.set('Amount', amount.toString());
    queryURL.searchParams.set('From', source);
    queryURL.searchParams.set('To', target);

    await page.goto(queryURL.toString());
    await page.waitForSelector('p[class*="BigRate"]', { timeout: 5000, visible: true });

    const exchangeRate = (await page.evaluate(() => {
      const rateElement = document.querySelectorAll('p[class*="BigRate"]')[0] as HTMLElement;
      return rateElement.innerText || '';
    })) as string;

    await browser.close();
    return exchangeRate;
  }

  async convert({ amount, source, target }: CurrencyConversionQuery) {
    const exchangeRate = await this.fetchConversion({ amount, source, target });
    const result = currencyStringToNumberRepresentation(exchangeRate);

    return {
      source,
      target,
      timestamp: Date.now(),
      result,
    };
  }

  async getRates(base: SupportedCurrency, table = SUPPORTED_CURRENCIES) {
    const ratesData = await Promise.all(
      table.map((currency) => this.convert({ amount: 1, source: base, target: currency }))
    );

    const rates = ratesData.reduce((acc, { target, result }) => ({ ...acc, [target]: result }), {}) as Record<
      SupportedCurrency,
      number
    >;

    return {
      timestamp: Date.now(),
      base,
      rates,
    };
  }
}
