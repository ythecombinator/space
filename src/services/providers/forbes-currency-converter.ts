import { outputFile } from 'fs-extra';
import isInCi from 'is-in-ci';
import { webkit } from 'playwright';

import {
  CurrencyConversionQuery,
  SUPPORTED_CURRENCIES,
  SupportedCurrency,
  currencyStringToNumberRepresentation,
} from 'utils/currency';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const BASE_URL = 'https://www.forbes.com';
const CONVERT_ENDPOINT_URL = `${BASE_URL}/advisor/money-transfer/currency-converter`;
const DEST_PATH = 'src/data/currency.json';

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class ForbesCurrencyConverter {
  private static instance: ForbesCurrencyConverter;

  static getInstance() {
    if (!this.instance) {
      this.instance = new ForbesCurrencyConverter();
    }

    return this.instance;
  }

  private async fetchConversion({ amount, source, target }: CurrencyConversionQuery): Promise<string> {
    const browser = await webkit.launch({
      headless: true,
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(0);
    page.setDefaultNavigationTimeout(0);

    const queryURL = new URL(`${CONVERT_ENDPOINT_URL}/${source.toLowerCase()}-${target.toLowerCase()}`);
    queryURL.searchParams.set('amount', amount.toString());

    await page.goto(queryURL.toString());
    await page.waitForSelector('span[class="amount"]', { timeout: 0, state: 'visible' });

    const exchangeRate = (await page.evaluate(() => {
      const rateElement = document.getElementsByClassName('amount')[0] as HTMLElement;
      return rateElement.innerText || '';
    })) as string;

    await browser.close();
    return exchangeRate;
  }

  private async convert({ amount, source, target }: CurrencyConversionQuery) {
    const exchangeRate = await this.fetchConversion({ amount, source, target });
    const result = currencyStringToNumberRepresentation(exchangeRate);

    return {
      source,
      target,
      timestamp: Date.now(),
      result,
    };
  }

  private async getRates(base: SupportedCurrency, table = SUPPORTED_CURRENCIES) {
    const targetCurrencies = table.filter((currency) => currency !== base);
    const ratesData = await Promise.all(
      targetCurrencies.map((currency) => this.convert({ amount: 1, source: base, target: currency }))
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

  async generateCurrencyTable() {
    if (isInCi) {
      console.info('Running in a CI environment');
      console.warn('Skipping currency table generation');
      return null;
    }

    const czkRates = await this.getRates('CZK');
    const rates = { CZK: czkRates };

    await outputFile(DEST_PATH, JSON.stringify(rates, null, 2));
  }
}
