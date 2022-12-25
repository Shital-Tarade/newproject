import React from 'react';
import { Drawer,DrawerBody,
    DrawerHeader,DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button, useDisclosure, VStack, HStack,
 } from '@chakra-ui/react';
 import {Link} from "react-router-dom";
  import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {
 const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
    <Button pos={"fixed"}
    top={'4'} left={'4'} 
    colorScheme="purple"
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}
    >
        <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
           <DrawerCloseButton />
           <DrawerHeader>PORTFOLIO</DrawerHeader>
            <DrawerBody>
 <VStack alignItems={'flex-start'}>
    <Button 
    onClick={onClose}
    variant={'ghost'} colorScheme={'purple'}>

        <Link to={'/'}>Home</Link>
    </Button>
    <Button 
    onClick={onClose}
    variant={'ghost'} colorScheme={'purple'}>

        <Link to={'/skill'}>Skill</Link>
    </Button>
    <Button 
    onClick={onClose}
    variant={'ghost'} colorScheme={'purple'}>

        <Link to={'/videose?category=free'}>videose</Link>
    </Button>
    <Button 
    onClick={onclose}
    variant={'ghost'} colorScheme={'purple'}>

        <Link to={'/upload'}>Upload Resume</Link>
    </Button>



 </VStack>  

 <HStack pos={'absolute'} bottom={'10'}
  left={'0'} 
  w={'full'}
  justifyContent={'space-evenly'}
  >
    <Button colorScheme={'purple'}>
        <Link to={'/login'}>Log In</Link>
    </Button>

    <Button colorScheme={'purple'} variant={'outline'}>
        <Link to={'signup'}>Sign Up</Link>
    </Button>
 </HStack>            
            </DrawerBody>  
      </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header;
