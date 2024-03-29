import { outputFile } from 'fs-extra';
import { launch } from 'puppeteer';

import {
  CurrencyConversionQuery,
  SUPPORTED_CURRENCIES,
  SupportedCurrency,
  currencyStringToNumberRepresentation,
} from '../src/utils/currency';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const BASE_URL = 'https://www.forbes.com';
const CONVERT_ENDPOINT_URL = `${BASE_URL}/advisor/money-transfer/currency-converter`;
const DEST_PATH = 'src/data/currency.json';

const args = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-infobars',
  '--window-position=0,0',
  '--ignore-certifcate-errors',
  '--ignore-certifcate-errors-spki-list',
  '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
];

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

async function fetchConversion({ amount, source, target }: CurrencyConversionQuery): Promise<string> {
  const browser = await launch({
    headless: true,
    args,
  });

  const page = await browser.newPage();

  const queryURL = new URL(`${CONVERT_ENDPOINT_URL}/${source.toLowerCase()}-${target.toLowerCase()}`);
  queryURL.searchParams.set('amount', amount.toString());

  await page.goto(queryURL.toString());
  await page.waitForSelector('span[class="amount"]', { timeout: 0, visible: true });

  const exchangeRate = (await page.evaluate(() => {
    const rateElement = document.getElementsByClassName('amount')[0] as HTMLElement;
    return rateElement.innerText || '';
  })) as string;

  await browser.close();
  return exchangeRate;
}

async function convert({ amount, source, target }: CurrencyConversionQuery) {
  const exchangeRate = await fetchConversion({ amount, source, target });
  const result = currencyStringToNumberRepresentation(exchangeRate);

  return {
    source,
    target,
    timestamp: Date.now(),
    result,
  };
}

async function getRates(base: SupportedCurrency, table = SUPPORTED_CURRENCIES) {
  const targetCurrencies = table.filter((currency) => currency !== base);
  const ratesData = await Promise.all(
    targetCurrencies.map((currency) => convert({ amount: 1, source: base, target: currency }))
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

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

async function codegenCurrencyData() {
  const czkRates = await getRates('CZK');
  const rates = { CZK: czkRates };

  await outputFile(DEST_PATH, JSON.stringify(rates, null, 2));
}

codegenCurrencyData();
