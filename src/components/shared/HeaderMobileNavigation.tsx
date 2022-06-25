import {
  useColorModeValue,
  CloseButton,
  VStack,
  UseDisclosureReturn,
} from '@chakra-ui/react';

import { NavigationPath } from 'config/constants';

import HeaderMobileNavigationLink from './HeaderMobileNavigationLink';

export type HeaderMobileNavigationProps = {
  isOpen: UseDisclosureReturn['isOpen'];
  onClose: UseDisclosureReturn['onClose'];
};

const HeaderMobileNavigation = (props: HeaderMobileNavigationProps) => {
  const { isOpen, onClose } = props;
  const backgroundColor = useColorModeValue('white', 'gray.800');

  return (
    <VStack
      position="absolute"
      top={0}
      left={0}
      right={0}
      display={isOpen ? 'flex' : 'none'}
      flexDirection="column"
      padding={2}
      paddingBottom={4}
      margin={2}
      backgroundColor={backgroundColor}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={onClose}
      />
      <HeaderMobileNavigationLink href={NavigationPath.speaking}>
        📣 Speaking
      </HeaderMobileNavigationLink>

      <HeaderMobileNavigationLink href={NavigationPath.writing}>
        ✍️ Writing
      </HeaderMobileNavigationLink>

      <HeaderMobileNavigationLink href={NavigationPath.coding}>
        👨‍💻 Coding
      </HeaderMobileNavigationLink>

      <HeaderMobileNavigationLink href={NavigationPath.work}>
        Work
      </HeaderMobileNavigationLink>

      <HeaderMobileNavigationLink href={NavigationPath.life}>
        Life
      </HeaderMobileNavigationLink>
    </VStack>
  );
};

export default HeaderMobileNavigation;
