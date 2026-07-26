import { useRouter } from 'next/router';

import {
  CurrencyConversionQuery,
  SupportedCurrency,
  convertCurrency,
  currencyInvariant,
  formatters,
} from 'utils/currency';

import Tooltip from 'components/shared/tooltip';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface Props extends CurrencyConversionQuery {
  leading?: boolean;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function Price({ amount, source = 'CZK', leading = false }: Props) {
  const { query } = useRouter();
  const currencyQuery = query.currency;
  const currencyParam = Array.isArray(currencyQuery) ? currencyQuery[0] : currencyQuery;

  const target = currencyInvariant(currencyParam ?? null) as SupportedCurrency;
  const formattedSourceAmount = formatters[source].format(amount);

  if (source === target) {
    return (
      <Typography.small className="mx-1 text-blue-800 dark:text-blue-300">
        {formattedSourceAmount}
        {leading && '\u00A0'}
      </Typography.small>
    );
  }

  const { result, lastUpdated } = convertCurrency({ amount, source, target });
  const disclaimer = `Last converted on ${lastUpdated}. Orginal amount: ${formattedSourceAmount}.`;

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Typography.small className="mx-1 text-blue-800 dark:text-blue-300">
            {result}
            {leading && '\u00A0'}
          </Typography.small>
        </Tooltip.Trigger>
        <Tooltip.Content>{disclaimer}</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default Price;
