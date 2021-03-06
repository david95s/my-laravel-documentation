import { 
  Box,
  Text,
} from '@chakra-ui/react';

export const BlocoDeRoute = ({ isTheView, typeRequisition, thePath, whatReturned, ...rest }) => {
  
  const theBlue = { color:"#44a4d1", fontWeight: "bolder" }
  
  const thePink = { color:"#9443c3", fontWeight: "bold" }

  const theGreen = { color: "#1c9745" }

  const theGold = { color: "#c9ac1f" }


  function RouteSpan(){
    return (<>
        <span style={theBlue}>Route</span>
        <span style={thePink}>::</span>
      </>)
  }

  if(typeRequisition?.functionType === "group"){
    return (
      <Box {...rest} bg="#252a37" p="8" lineHeight="7" letterSpacing="3px" borderRadius="4" >
      <Text> 
        {RouteSpan()}
        <span style={theGreen}>group</span>
        <span>(</span>
        <span style={theGold}>{`["prefix"=> "produto"]`}</span>
        <span>, </span> 
        <span style={thePink}>function</span>
        <span> () {"{"}</span>
      </Text>
        {["/","limpeza", "bebidas"].map((item, index) => {
          return (
            <div key={item} style={{marginLeft:"17px"}}>
              {RouteSpan()}
              <span style={theGreen}>get</span>
              <span>(</span>
              <span style={theGold}>{`"${item}"`}</span>
              <span>, </span>
              <span style={thePink}>function</span>
              <span> () {"{"}</span>
              <span></span>
              <Text style={{marginLeft:"8px"}}> 
                <span style={thePink}>return </span>     
                <span style={theGold}>{'"'}Sou a rota </span>
                <span style={{color:"#c9ac1f", textTransform: "capitalize"}}> {`${ index === 0 ? "inicial" : item }`}</span>
                <span style={theGold}> da página de Produto{`"`};</span>
              </Text>
              <Text> 
                {"}"});
              </Text>
            </div>
          )
        })}
      <Text> 
        {"}"});
      </Text>
    </Box>
    );
  }


  if(typeRequisition?.functionType === "redirect"){
    return (
      <Box {...rest} bg="#252a37" p="8" lineHeight="7" letterSpacing="3px" borderRadius="4" >
        <Text> 
          {RouteSpan()}
          <span style={theGreen}>get</span>
          <span>(</span>
          <span style={theGold}>{`'${thePath}'`}</span>
          <span>, </span> 
          <span style={thePink}>function</span>
          <span> () {"{"}</span>
        </Text>
        { typeRequisition.pathOrName.type === "path" ?
          (
          <Text style={{marginLeft:"8px"}}> 
            <span style={thePink}>return </span>     
            <span style={theGreen}>redirect</span> 
            <span>(</span> 
            <span style={theGold}>{`"${typeRequisition.pathOrName.text}"`}</span>
            <span>)</span>;
          </Text>
          ) : 
          (
            <Text style={{marginLeft:"8px"}}> 
              <span style={thePink}>return </span>     
              <span style={theGreen}>redirect</span> 
              <span>(){`->`}</span> 
              <span style={theGreen}>route</span> 
              <span>(</span>
              <span style={theGold}>{`"${typeRequisition.pathOrName.text}"`}</span>
              <span>);</span>
            </Text>
          )
        }
        <Text> 
          {"}"});
        </Text>
      </Box>
    )
  }

  if(typeRequisition?.type === "match"){
    return (
      <Box {...rest} bg="#252a37" p="8" lineHeight="7" letterSpacing="3px" borderRadius="4" >      
        <Text> 
          {RouteSpan()}
          <span style={theGreen}>{typeRequisition.type}</span>
          <span>([</span>
          {typeRequisition.arrReq.map((item,index) => {
            if(index === 0){
              return (
                <span key={item} style={theGold}>
                  {`'${item}'`}
                  <span style={{color: "white"}}>, </span>
                </span>
              )
            }else{
              return (
                <span key={item} style={theGold}>
                  {`'${item}'`}
                </span>
              )
            }
          })}
          <span>]</span>
          <span>, </span>
          <span style={theGold}>{`'${thePath}'`}</span>
          <span>, </span> 
          <span style={thePink}>function</span>
          <span> () {"{"}</span>
        </Text>
        <Text style={{marginLeft:"8px"}}> 
          <span style={thePink}>return </span>
          <span style={theGold}>{`'${whatReturned}'`}</span>
          <span>;</span>
        </Text>
        <Text> 
          {"}"});
        </Text>
      </Box>
    )
  }

  // Retorno Padrão BAIXO
  return (
    <Box {...rest} bg="#252a37" p="8" lineHeight="7" letterSpacing="3px" borderRadius="4" >
      <Text> 
        {RouteSpan()}
        <span style={theGreen}>
          {typeRequisition?.type === "nameRedirect" ?  "get" : typeRequisition.type }
        </span>
        <span>(</span>
        <span style={theGold}>{`'${thePath}'`}</span>
        <span>, </span> 
        <span style={thePink}>function</span>
        <span> (</span>
        {typeRequisition?.functionType === "param" && (
          "$id"
        )}
        {typeRequisition?.functionType === "paramOpcional" && (
          "$id = null"
        )}
        <span>) </span>

        <span>{"{"}</span> 
      </Text>
      <Text style={{marginLeft:"8px"}}> 
        <span style={thePink}>return </span>
        {
          isTheView ?
          (
            <span>
              <span style={theGreen}>view</span>
              <span>(</span>
              <span style={theGold}>{`'${whatReturned}'`}</span>
              <span>);</span>
            </span>
          ) :
          (
            <span>
              <span style={theGold}>{`'${whatReturned}'`}</span>
              <span>;</span>
            </span>
          )
        }
      </Text>
      <Text> 
        {"}"})
        {typeRequisition?.functionType === "nameRedirect" && (
          <span>
            <span style={thePink}>-</span>
            <span style={{color: "#9443c3" , position: 'relative', top:"2px"}}>{">"}</span>
            <span style={theGreen}>name</span>
            <span>(</span>
            <span style={theGold}>{`'${typeRequisition.pathOrName.text}'`}</span>
            <span>)</span>
          </span>
        )}
        ;
      </Text>
    </Box>
  )

}