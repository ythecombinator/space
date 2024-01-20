import { useSearchParams } from 'next/navigation';
import { FunctionComponent } from 'react';

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
  prefix: string | undefined;
  postfix: string | undefined;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Price: FunctionComponent<Props> = ({ amount, source = 'CZK', prefix = '', postfix = '' }) => {
  const searchParams = useSearchParams();

  const target = currencyInvariant(searchParams.get('currency')) as SupportedCurrency;
  const formattedSourceAmount = formatters[source].format(amount);

  if (source === target) {
    return (
      <Typography.small className="mx-1 text-blue-800 dark:text-blue-300">
        {prefix} {formattedSourceAmount} {postfix}
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
            {prefix} {result} {postfix}
          </Typography.small>
        </Tooltip.Trigger>
        <Tooltip.Content>{disclaimer}</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Price;
