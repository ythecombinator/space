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

const Price: FunctionComponent<Props> = ({ amount, source = 'CZK', prefix = ' ', postfix = ' ' }) => {
  const searchParams = useSearchParams();
  const target = currencyInvariant(searchParams.get('currency')) as SupportedCurrency;

  if (source === target) {
    const result = formatters[target].format(amount);
    return (
      <Typography.small className="text-blue-800 dark:text-blue-300 ml-1 mr-1">
        {prefix} {result} {postfix}
      </Typography.small>
    );
  }

  const { result, lastUpdated } = convertCurrency({ amount, source, target });
  const disclaimer = `Last converted from ${source} on ${lastUpdated}. Orginal amount: ${amount}.`;

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Typography.small className="text-blue-800 dark:text-blue-300 ml-1 mr-1">
            {prefix} {result} {postfix}
          </Typography.small>
        </Tooltip.Trigger>
        <Tooltip.Content>{disclaimer}</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Price;
