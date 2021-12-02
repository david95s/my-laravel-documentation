import { Text, Link as LinkChakra, Icon} from "@chakra-ui/react";
// import { ActiveLink } from "../ActiveLink";



export const NavLink = ({ myIcon, children, myHref, ...rest }) => {

  return (
    // <ActiveLink href={ myHref } passHref>
    // </ActiveLink>
    /* <LinkChakra display="flex" align="center" {...rest}>
        <Icon as={ myIcon } fontSize="20" />
        <Text ml="4" fontWeight="medium">{ children }</Text>
      </LinkChakra> */
    <Text ml="4" fontWeight="medium">{ children }</Text>
      

  );
}