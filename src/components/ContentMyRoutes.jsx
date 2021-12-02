import { 
  Box,
  Flex,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';

import { BlocoDeRoute } from './BlocoDeRoute';

export const ContentMyRoutes = () =>{

  const theEnfase = { 
    margin: "5px",
    padding:"7px 10px",
    background: "black",
    color:"#ccc",
    borderRadius: "8px",
    fontSize: "16px",
    letterSpacing: "3px"
  }

  return (
    <VStack  alignItems="start" spacing="48px" >
      <VStack p="10" spacing="10" bg="#12141d" border="solid 1px #181b29"  borderRadius="8px">
        <Box lineHeight="35px" >
          <Text color="gray.300">
            <span>O arquivo que contem as configurações das rotas pode ser encontrado no path </span>
            <span style={theEnfase}>{`"/routes/web.php"`}</span>
          </Text>
          <Text color="gray.300">
            <span >A forma mais simples de definir uma rota é fazendo no proprio arquivo.</span>
            <span style={{margin: "5px"}}> Abaixo segue o exemplo mais simples, porém não recomendado,
            servindo apenas por questão de conhecimento.
            </span>
          </Text>
        </Box>
        <Box lineHeight="35px" w="100%">
          <Text color="gray.300">
            Definindo uma rota do tipo GET.
          </Text>
          <Flex>
            <BlocoDeRoute flex="1" whatReturned="welcome" thePath="/" typeRequisition={{type: "get"}} isTheView/>
            <Box flex="1" marginLeft="8">
              <Text color="gray.500">
                Dessa forma, sempre que a rota bater em {` "/"  `}
                a function <span style={{color: 'green'}}>view( )</span> vai procurar dentro dos arquivos 
                uma View chamada <span style={theEnfase}>welcome.blade.html</span>, 
                e vai retornar ela. Mas eu podia simplesmente retornar uma string.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box lineHeight="35px" w="100%">
          <Text color="gray.300">
            Definindo uma rota do tipo POST.
          </Text>
          <Flex alignItems="center">
            <BlocoDeRoute flex="1" h="150px" whatReturned="Terefa relacionado a formulário" thePath="/about" typeRequisition={{type: "post"}}/>
            <Box flex="1" marginLeft="8">
              <Text color="gray.500">
                <span>Aq eu simplesmente retorno uma string, sempre que a rota bater em</span>
                <span style={theEnfase}>{`"/about"`}</span>
                <span>.
                  Lembrando que o metodo 
                  <span style={{color:"green"}}> POST </span> 
                  geralmente realiza alguma tarefa de formulário, 
                  <span> assim, provavelmente esse cod retonara um erro. </span>
                </span>
                <span>Caso queira de fato retorna  uma string, troque o metodo para</span>
                <span style={{color:"green"}}> GET</span>.
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>

      <VStack w="100%" p="10" spacing="8" alignItems="start" bg="#12141d" border="solid 1px #181b29" borderRadius="8px">
        <Box>
          <Heading fontWeight="100" color="gray.400" fontSize="1.5rem" m="0px" mb="10px">
            <Text as="span" color="laravelColor" fontSize="1rem" >#</Text>
            <Text as="span" ml="4px">Match</Text>
          </Heading>
          <Text color="gray.300">
            <span>É passado um array com os tipos de requisição para dentro do metodo Match. </span>
            <span>Podendo sendo ser <span style={{color:"green"}}>GET, POST, PUT</span> etc..</span>      
          </Text>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Definindo uma rota do tipo POST ou GET.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute flex="1" h="150px" whatReturned="<h1>Post ou GET</h1>" thePath="/about" typeRequisition={{type: "match", arrReq: ["post", "get"]}} />
            <Box width="40%" marginLeft="4">
              <Text color="gray.500">
                Aq independente se for <span style={{color:"green"}}>GET </span> 
                ou <span style={{color:"green"}}>POST</span> , eu vou retornar um H1 com texto dentro.
                Repare que a rota  <span style={theEnfase}> {`"/about"`}</span> é passado como segundo argumento.
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>

      <VStack w="100%" p="10" spacing="8" alignItems="start" bg="#12141d" border="solid 1px #181b29" borderRadius="8px">
        <Box>
          <Heading fontWeight="100" color="gray.400" fontSize="1.5rem" m="0px" mb="10px">
            <Text as="span" color="laravelColor" fontSize="1rem" >#</Text>
            <Text as="span" ml="4px">Any</Text>
          </Heading>
          <Text color="gray.300">
            <span>O Tipo Any, independe do tipo de requisição passado.</span> 
            <span> Ou seja, eu uso o tipo Any passando qualquer tipo de requisição</span>     
            <span> e ele não retornará erro</span>     
          </Text>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Definindo uma rota sendo de qualquer tipo.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute flex="1" h="150px" whatReturned="<h1>Aceito Qualquer tipo de rota</h1>" thePath="/produto" typeRequisition={{type: "any"}} />
            <Box width="40%" marginLeft="4">
              <Text color="gray.500">
                Sempre quando bater na rota <span style={theEnfase}>{`"/produto"`}</span>retornará um H1, independente de qual seja o tipo de requisição.
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>

      <VStack w="100%" p="10" spacing="8" alignItems="start" bg="#12141d" border="solid 1px #181b29" borderRadius="8px">
        <Box>
          <Heading fontWeight="100" color="gray.400" fontSize="1.5rem" m="0px" mb="10px">
            <Text as="span" color="laravelColor" fontSize="1rem" >#</Text>
            <Text as="span" ml="4px">Redirect</Text>
          </Heading>
          <Text color="gray.300" >
            <span>Pode-se definir uma rota em que, assim q bater nela, seja feito o redirecionamento para uma outra rota. </span> 
            <span>Para isso é necessário executar a função </span>
            <span style={{color:"green"}}> redirect( ) </span>
            <span>passando como parametro o path da rota a qual eu quero ser redirecionado</span>
          </Text>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Passando path como parametro em  <span style={{color:"green"}}> redirect( ) </span>.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute 
              flex="1"
              h="150px"
              whatReturned="<h1>Aceito Qualquer tipo de rota</h1>"
              thePath="/profile"
              typeRequisition={{
                type: "get",
                functionType: "redirect",
                pathOrName: {
                  type: 'path',
                  text: "/profile/verify-auth"
              }}}
            />
            <Box width="40%" marginLeft="4">
              <Text color="gray.500">
                <span>Quando estiver na rota</span>
                <span style={theEnfase}>{`"/profile"`}</span>
                <span>serei redirecionado para a rota</span>
                <span style={theEnfase}>{`"/profile/verify-auth"`}</span>
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>

      <VStack w="100%" p="10" spacing="8" alignItems="start" bg="#12141d" border="solid 1px #181b29" borderRadius="8px">
        <Box>
          <Heading fontWeight="100" color="gray.400" fontSize="1.5rem" m="0px" mb="10px">
            <Text as="span" color="laravelColor" fontSize="1rem" >#</Text>
            <Text as="span" ml="4px">Redirect usando name()</Text>
          </Heading>
          <Text color="gray.300" >
            <span>Fazer redirect sem a necessidade de </span>
            <span>passar como parametro todo o path da rota que quero ser redirecionado. </span>
            <span>Para isso é necessário, na rota a qual quero ser redirecionado, criar um </span>
            <span>nome para ela usando a função</span>
            <span style={{color:"green"}}> name( ). </span>
            <span>E quando for executar a func </span>
            <span style={{color:"green"}}>redirect( )</span>,
            <span> executar também a função </span>
            <span style={{color:"green"}}>route( )</span>,
            <span> uma seguida da outra</span>.
          </Text>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Criando um nome para a rota.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute 
              flex="1"
              h="150px"
              whatReturned="Vou verificar o auth de profile"
              thePath="/profile/verify-auth"
              typeRequisition={{
                type: "get",
                functionType: "nameRedirect",
                pathOrName: {
                  type: 'name',
                  text: "NomeDaRota"
              }}}
            />
            <Box width="40%" marginLeft="4">
              <Text color="gray.500">
                <span>Criado essa rota</span>
                <span style={theEnfase}>{`"/profile/verify-auth"`}</span>
                <span>com o name</span>
                <span style={theEnfase}>NomeDaRota</span>
                <span style={{position: 'relative', left: '-4px'}}>.</span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Fazendo um redirect usando o name como argumento e não o path.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute 
              flex="1"
              h="150px"
              thePath="/profile"
              typeRequisition={{
                type: "get",
                functionType: "redirect",
                pathOrName: {
                  type: 'name',
                  text: "NomeDaRota"
              }}}
            />
            <Box width="40%" marginLeft="4">
              <Text color="gray.500">
                <span>Quando estiver na rota</span>
                <span style={theEnfase}>{`"/profile"`}</span>
                <span>serei redirecionado para a rota</span>
                <span style={theEnfase}>{`"/profile/verify-auth"`}</span>
                <span>por conta do name criado. Repare que</span>
                <span> as funções</span>
                <span style={{color:"green"}}> redirect( )</span> e
                <span style={{color:"green"}}> route( )</span>,
                <span> foram executadas uma seguida da outra.</span>
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>

      <VStack w="100%" p="10" spacing="8" alignItems="start" bg="#12141d" border="solid 1px #181b29" borderRadius="8px">
        <Box>
          <Heading fontWeight="100" color="gray.400" fontSize="1.5rem" m="0px" mb="10px">
            <Text as="span" color="laravelColor" fontSize="1rem" >#</Text>
            <Text as="span" ml="4px">Parametro na requisição</Text>
          </Heading>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Passando parametro na requisição.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute flex="1" h="150px" whatReturned="Rota Com Parametro => {$id}"thePath="/rota-com-param/{idpass}" typeRequisition={{
              type: "get",
              functionType: "param",
            }} />
            <Box width="40%" marginLeft="4">
              <Text color="gray.500">
                Nessa rota é obrigatória passar um parametro. 
                O script retorná um erro , se por ventura o parametro <span style={theEnfase}>{`"idpass"`}</span>
                não for passado
                após <span style={theEnfase}>{`"/rota-com-param/"`}</span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box lineHeight="35px" width="100%">
          <Text color="gray.300">
            Parametro Opcional na requisição.
          </Text>
          <Flex width="100%">
            <BlocoDeRoute flex="1" h="150px" whatReturned="Se houver param eu faço algo"thePath="/rota-com-param-opcional/{idpass?}" typeRequisition={{
              type: "get",
              functionType: "paramOpcional",
            }} />
            <Box width="33%" marginLeft="4">
              <Text color="gray.500">
                Aqui o parametro é opcional. 
                Repare que o que muda na sintaxe é o simbolo de interrogação <span style={theEnfase}>{`"?"`}</span>
                que é passado no final do idpass: 
                <span style={theEnfase}>{`"{idpass?}"`}</span>
                É importante passar o valor inicial de id, caso ele não exista, no ex ele tem val inicial de null.
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>

    </VStack>
  )
}

