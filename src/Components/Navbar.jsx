import {Flex,Box,Heading,Button,ButtonGroup,Spacer} from "@chakra-ui/react"
import React from "react";
function Navbar(){
  const handleLogin=()=>{
    // <a src="./Components/Login"></a>
    // window.href="./Components/Login"
  
  }
const logo="https://prod.smassets.net/assets/website/2.193.0/images/logo-surveymonkey.svg"
  return (
  
  <div style={{boxShadow:" 0 3px 10px rgb(0 0 0 / 0.2)"}}>
<Flex minWidth='max-content' alignItems='center' gap='1'>
  <Box p='2'>
    <Heading size='md'><img src={logo}/></Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='1'>
    <Button colorScheme='teal'>Create Surveys</Button>
    <Button colorScheme='teal'>Collect Responses</Button>
    <Button colorScheme='teal'>Analize Reports</Button>
    <Button colorScheme='teal'>Plans & Pricing</Button>
    <Button onClick={handleLogin} style={{backgroundColor:"Yellow",color:"teal"}} colorScheme='teal'>SignUp Free </Button>

  </ButtonGroup>
</Flex>
  </div>
 
  
 
)
}
export default Navbar

