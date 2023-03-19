import {
  Link,
  LinkProps,
  Icon,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

const LinkExternal = ({ children, ...linkProps }: LinkProps) => {
  return (
    <span>
      <Link
        {...linkProps}
        alignItems="center"
        display="inline-flex"
        color={mode('purple.500', 'purple.300')}
        isExternal
        target="_blank"
      >
        {children}
      </Link>
      <Icon
        as={FiArrowUpRight}
        display="inline"
        color={mode('gray.700', 'white')}
      />
    </span>
  );
};

export default LinkExternal;
