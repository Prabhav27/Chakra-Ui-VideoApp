import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,HStack,
} from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
export default function Header() {

const {isOpen,onOpen,onClose}=useDisclosure();

  return (
   <>
   <Button colorScheme={'cyan'} pos={'fixed'} top={1} left={1} fontSize={18} onClick={onOpen}zIndex={'overlay'}> 
    <AiOutlineMenu />
   </Button>
    <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
    <DrawerOverlay />
    <DrawerContent>

    <DrawerCloseButton  marginTop={3}/>



      <DrawerHeader  fontSize={25}>
        PRABHAV
      </DrawerHeader>

      <DrawerBody>
    <VStack marginTop={25}>

      <Button colorScheme='cyan'  marginTop={3} width={150} fontSize={18}  onClick={onClose}>
        <Link to={'/'}>Home</Link>
      </Button>

      <Button colorScheme='cyan'  marginTop={3} width={150} fontSize={18} onClick={onClose}>
        <Link to={'/Videos'}>Videos</Link>
      </Button>

      <Button colorScheme='cyan' marginTop={3} width={150} fontSize={18} onClick={onClose}>
        <Link to={'/Videos?category=free'}>Free Videos</Link>
      </Button>

      <Button colorScheme='cyan' marginTop={3} width={150} fontSize={18} onClick={onClose}>
        <Link to={'/Upload'}>Upload Video</Link>
      </Button>


    </VStack>
      </DrawerBody>

    <DrawerFooter>

    <HStack marginBottom={4} justifyContent={'space-around'} width={'full'} left={0} onClick={onClose}>

    <Button colorScheme='cyan'  fontSize={16}>
        <Link to={'/Login'}>Log In</Link>
      </Button>
      <Button colorScheme='cyan' variant={'outline'}   fontSize={16} onClick={onClose} >
        <Link to={'/Signup'}>Sign Up</Link>
      </Button>

    </HStack>
    </DrawerFooter>
    </DrawerContent>
    </Drawer>
   </>
  )
}

