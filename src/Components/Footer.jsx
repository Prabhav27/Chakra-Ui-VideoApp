import React from 'react'
import { Box,HStack,VStack,Text,Button,Stack,Input,Heading}  from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai';
import { AiFillInstagram } from "react-icons/ai";

import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
export default function Footer() {
  return (
    <>

    <Box bgColor={'blackAlpha.900'} minH={'30'} p={10} color={'white'}>

    <Stack direction={['column','row']} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <VStack w={'full'}>
<Heading size={'md'} textTransform={'uppercase'}
            textAlign={['center', 'left']}>
    Subscribe To Unveil The Future
</Heading>
<HStack >

<Input placeholder='Enter Your Email'  
              ></Input>
<Button p={'0'}
              colorScheme={'cyan'}
              >
    <AiOutlineSend size={20}/>
</Button>
</HStack>
        </VStack>

        <VStack   w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}>

            <Text>
            COPYRIGHT © 2024 PRABHAV BAKLIWAL 
                </Text>

            <Text>
            ALL RIGHTS RESERVED.
            </Text>
        </VStack>


        <VStack w={'full'} >
            <HStack spacing={4}>
<Button colorScheme='cyan' fontSize={24} w={10} borderRadius={'50%'}>
   <a href="https://github.com/Prabhav27" target='blank'>
    <ImGithub />
    </a> 
    </Button>
<Button colorScheme='cyan'  fontSize={22} w={10} borderRadius={'50%'}>
    <a href="https://www.linkedin.com/in/prabhav-bakliwal-cse/" target='blank'>
        <GrLinkedin />
        </a>
        </Button>

<Button colorScheme='cyan' fontSize={30} width={10} borderRadius={'50%'}>
    <a href="https://www.instagram.com/prabhav_2710/" target='blank'>

<AiFillInstagram />
    </a>
</Button>
            </HStack>
        </VStack>
    </Stack>

    </Box>
    </>
  )
}
