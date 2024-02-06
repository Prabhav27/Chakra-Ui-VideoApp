import React from 'react'
import { Box,VStack,HStack,Input,Button} from '@chakra-ui/react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
export default function Upload() {
  return (
    <>
    <Box w={'full'} h={'100vh'}  >
        <VStack w={'full'} h={'100vh'} color={'cyan.400'} justifyContent={'center'}>
       
            <AiOutlineCloudUpload size={'10vmax'}/>
        <form >
            <HStack justifyContent={'center'} alignItems={'center'}>
<Input required type='file'/>
<Button colorScheme='cyan' type='submit'>Upload</Button>
            </HStack>
        </form>
        </VStack>
    </Box>
    </>
  )
}
