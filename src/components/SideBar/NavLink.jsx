import { Text, Link as LinkChakra, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";



export const NavLink = ({ myIcon, children, myHref, ...rest }) => {

  return (
    <ActiveLink href={ myHref } passHref>
      <LinkChakra display="flex" align="center" {...rest}>
        <Icon as={ myIcon } fontSize="20" />
        <Text ml="4" fontWeight="medium">{ children }</Text>
      </LinkChakra>
    </ActiveLink>

  );
}