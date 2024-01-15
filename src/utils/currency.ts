import conversionMap from 'data/currency.json';

import { formatDate } from 'utils/date';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

export const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'BRL', 'CZK'] as const;

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

export const formatters = SUPPORTED_CURRENCIES.reduce(
  (formatters, currency) => {
    formatters[currency] = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatters;
  },
  {} as Record<SupportedCurrency, Intl.NumberFormat>
);

export function currencyStringToNumberRepresentation(value: string): number {
  const numericPart = value.match(/[-+]?[0-9]*\.?[0-9]+/)?.[0];
  const result = numericPart ? parseFloat(numericPart) : NaN;

  if (isNaN(result)) {
    throw new Error('Invalid currency string');
  }

  return result;
}

export function currencyInvariant(value: string | null, defaultValue: SupportedCurrency = 'CZK') {
  if (!value) {
    return defaultValue;
  }

  // @ts-ignore
  if (!SUPPORTED_CURRENCIES.includes(value)) {
    return defaultValue;
  }

  return value as SupportedCurrency;
}

export function useCurrencyConversion({ source = 'CZK', target, amount }: CurrencyConversionQuery) {
  if (source === target) {
    return { result: amount, lastUpdated: null };
  }

  // @ts-ignore
  const conversionRate = conversionMap[source].rates[target];
  const formatter = formatters[target];
  const convertedValue = amount * conversionRate;

  const result = formatter.format(convertedValue);
  // @ts-ignore
  const lastUpdated = formatDate(conversionMap[source].timestamp);

  return { result, lastUpdated };
}

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

export interface CurrencyConversionQuery {
  amount: number;
  source: SupportedCurrency;
  target: SupportedCurrency;
}
