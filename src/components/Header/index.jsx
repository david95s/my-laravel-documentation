import { Flex, Button, Icon, Tooltip } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

export default function Header({ toogleThemeToDark, theDarkTheme, isopenSidebar, toogleSideBar }){

  function handleTheme(){
    toogleThemeToDark();
  }

  return(
    <Flex bg="backgroundHeader" w="100%" as="header" mx="auto" h={["50px","70px"]} align="center" borderBottom="1px solid #813232" >
      {!isopenSidebar && (
        <Flex align="center" ml="5">
          <Button  onClick={toogleSideBar} px="1"  background="transparent"  color="laravelColor" variant='solid'  _hover={{ background: "#232930" }}>
            <Icon as={ RiMenuLine } fontSize="1.3rem"/>
          </Button>
        </Flex>
      )}
      <Tooltip label='In progress....' >
        <Button   
          colorScheme="dark"
          variant="outline"
          color="dark"
          position="absolute"
          right="55"
          top="4"
          _hover={{ cursor: 'not-allowed' }}
        >
          {theDarkTheme ? "☀️" : "🌒"}
        </Button>
      </Tooltip>

    </Flex>
  )
}