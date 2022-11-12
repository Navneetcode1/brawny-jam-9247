import {Flex,Box,Heading,Button,ButtonGroup,Spacer} from "@chakra-ui/react"
function Navbar(){
return (
  
 <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Survey Monkey</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Create Surveys</Button>
    <Button colorScheme='teal'>Collect Responses</Button>
    <Button colorScheme='teal'>Analize Reports</Button>
    <Button colorScheme='teal'>Plans & Pricing</Button>
    <Button colorScheme='teal'>SignUp Free </Button>

  </ButtonGroup>
</Flex>
  
 
)
}
export default Navbar

