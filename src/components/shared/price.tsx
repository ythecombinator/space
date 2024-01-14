import { useSearchParams } from 'next/navigation';
import { FunctionComponent } from 'react';

import { CurrencyConversionQuery, SupportedCurrency, currencyInvariant, useCurrencyConversion } from 'utils/currency';

import Tooltip from 'components/shared/tooltip';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface Props extends CurrencyConversionQuery {}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Price: FunctionComponent<Props> = ({ amount, source = 'CZK' }) => {
  const searchParams = useSearchParams();

  const currency = currencyInvariant(searchParams.get('currency')) as SupportedCurrency;
  const finalAmount = useCurrencyConversion({ amount, source, target: currency });

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Typography.small>{finalAmount}</Typography.small> {` `}
        </Tooltip.Trigger>
        <Tooltip.Content>
          Converted from {source}. Orginal amount: {amount}.
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Price;
