import React from 'react';
import Link from 'next/link';
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import { 
  useBreakpointValue,
  Box,
  Button,
  Text,
  Icon,
  VStack,
  Heading,
  Link as LinkChakra
} from "@chakra-ui/react";

import { VscChromeClose } from "react-icons/vsc";
import { GiPathDistance, GiConsoleController } from "react-icons/gi";

export const Sidebar = ({ isopenSidebar, toogleSideBar }) => {

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box transition="0.2s" width={isopenSidebar ? "300px" : "0"} as="aside" position="relative" bg="backgroundHeader" borderRight="1px solid #813232" >
      {isopenSidebar && (
        <Box>
          <Heading display="flex" bg="backgroundHeaderAside"  alignItems="center"  justifyContent="space-between" px="3" h={["50px","70px"]}  fontSize="2rem" m="0">
            <Link passHref href="/" color="laravelColor">
              <LinkChakra 
                color="laravelColor"
                _hover={{
                  textDecor:"none",
                }}
              >
                Laravel
              </LinkChakra>
            </Link>
            <Button onClick={toogleSideBar} background="transparent"  color="laravelColor" variant='solid' px="1" _hover={{ background: "#232930" }}>
              <Icon as={ VscChromeClose } fontSize={ isDrawerSidebar ? "20" : "17"}/>
            </Button>
          </Heading>

          <VStack px="8" spacing="2" h="calc(100vh - 70px)" align="self-start">
            <Box mt="8">
              <NavSection title="ROUTES">
                <NavLink myIcon={GiPathDistance} myHref="/routesbasic">Rotas | básico</NavLink>
                <NavLink myIcon={GiConsoleController} myHref="/controllersroute">Rotas | controllers</NavLink>

              </NavSection>          
            </Box>
          </VStack>

          <Text 
            position="absolute"
            bottom="0px"
            textAlign="center"
            height="50px"
            width="100%"
            fontSize="0.9rem"
            lineHeight="50px"
            color="gray.400"
            background="backgroundHeaderAside"
          >Feito com 💜 por David Linconl.</Text>
        </Box>
      )}
      
    </Box>
  )
}
