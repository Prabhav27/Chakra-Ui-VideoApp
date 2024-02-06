import React from 'react'
import { Box,VStack,Heading,Input,Button,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
   <>
   <Box h={'100vh'} w={'full'}>

   <Box h={'100vh'} display={'flex'} justifyContent={'center'} p={10}>

    <form>
      <VStack spacing={8}> 
    <Heading >
      Welcome Back
    </Heading>
    <Input  placeholder='Enter Email' type='email' w={'xs'} required focusBorderColor='cyan.300'/>
    <Input  placeholder='Enter Password' type='password' w={'xs'}required focusBorderColor='cyan.300' />
    <Button variant={'link'} alignSelf={'flex-end'}>
<Link to={'/forgetpassword'}>Forget Password</Link>
    </Button>
    <Button  type='submit' colorScheme='cyan'>log In</Button>
    <Text alignSelf={'flex-end'}>
New User?   
    
    <Button marginLeft={2} variant={'link'}>
      <Link to={'/Signup'}>Sign Up</Link>
    </Button>
    </Text>
      </VStack>
    </form>
   </Box>
   </Box>
   </>
  )
}
