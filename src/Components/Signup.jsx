import React from 'react'
import { Box,VStack,Button,Text,Heading,Input,Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <>
    <Box h={'100vh'} w={'full'}>
<Box h={'100vh'} display={'flex'} justifyContent={'center'}p={10}>
    <VStack spacing={8}>
<Heading textAlign={['center',]}>Join Us To Unveil The Future!</Heading>
<Avatar boxSize={32}></Avatar>
<Input type='name' w={'xs'} focusBorderColor='cyan.300' required placeholder='Enter Name'/>
<Input type='email' w={'xs'} focusBorderColor='cyan.300' required placeholder='Enter Email'/>
<Input type='password' w={'xs'} focusBorderColor='cyan.300' required placeholder='Enter Password'/>
<Button type='submit' colorScheme='cyan'>Sign Up</Button>
<Text >
Already Joined?   
    
    <Button marginLeft={2} variant={'link'}>
      <Link to={'/Login'}>Log In</Link>
    </Button>
    </Text>
    </VStack>
</Box>
    </Box>
    </>
  )
}
