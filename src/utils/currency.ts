import { createContext, useContext } from 'react';

import XEService from 'services/providers/xe';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

export const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'BRL', 'CZK'] as const;

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const formatters = SUPPORTED_CURRENCIES.reduce(
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

export function useCurrencyConversion({ source, target, amount }: CurrencyConversionQuery) {
  const conversionMap = useContext(CurrencyContext);
  const conversionRate = conversionMap[source]?.rates[target] ?? 1;
  const formatter = formatters[target];

  const convertedValue = amount * conversionRate;
  const formattedValue = formatter.format(convertedValue);

  return formattedValue;
}

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

export type CurrencyContextModel = Partial<Record<SupportedCurrency, Awaited<ReturnType<XEService['getRates']>>>>;

export interface CurrencyConversionQuery {
  amount: number;
  source: SupportedCurrency;
  target: SupportedCurrency;
}

//  ---------------------------------------------------------------------------
//  CONTEXT
//  ---------------------------------------------------------------------------

export const CurrencyContext = createContext<CurrencyContextModel>({});
