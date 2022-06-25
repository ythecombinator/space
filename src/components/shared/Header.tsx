import {
  chakra,
  HStack,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import { NavigationPath } from 'config/constants';

import ColorModeToggle from 'components/shared/ColorModeToggle';
import HeaderLink from 'components/shared/HeaderLink';
import HeaderMobileNavigation from 'components/shared/HeaderMobileNavigation';
import Logo from 'components/shared/Logo';

export default function Header() {
  const backgroundColor = useColorModeValue('white', 'gray.800');
  const mobileNavigation = useDisclosure();

  return (
    <chakra.header
      position="sticky"
      background={backgroundColor}
      marginBottom="10"
      zIndex="popover"
      top={0}
      width="full"
    >
      <Box height="4.5rem" marginX="auto">
        <Flex
          width="full"
          height="full"
          paddingX="6"
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
                <Logo />
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
              <HeaderLink href={NavigationPath.speaking}>
                📣 Speaking
              </HeaderLink>
              <HeaderLink href={NavigationPath.writing}>✍️ Writing</HeaderLink>
              <HeaderLink href={NavigationPath.coding}>👨‍💻 Coding</HeaderLink>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">
            <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
              <Button variant="solid" size="sm">
                Work
              </Button>
              <Button variant="ghost" size="sm">
                Life
              </Button>
              <ColorModeToggle />
            </HStack>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNavigation.onOpen}
            />
          </Flex>
        </Flex>
        <HeaderMobileNavigation
          isOpen={mobileNavigation.isOpen}
          onClose={mobileNavigation.onClose}
        />
      </Box>
    </chakra.header>
  );
}
