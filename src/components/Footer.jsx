import { Box, Button, Heading, HStack, Input, Stack, VStack,Text, InputAddon } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return 
    <Box bgColor={"blackAlpha.900"} minH={"40"}
    p="16"
    color={'white'}
     >
     <Stack direction={['column', 'row']}>
   <VStack alignItems={'stretch'} 
   w={'full'} p={'4'}>
    <Heading size='md' textTransform={'uppercase'} textAlign={'center'} >
        View to get Update
    </Heading>
    <HStack 
    borderBottom={"2px solid white"}
    py="2"
    >
    <Input placeholder='Enter Email Here.....'
        border={'none'}
        borderRadius='none'
        outline={'none'}
        focusBorderColor="none"
    />
        <Button
        p={"0"}
        colorScheme={"purple"}
        variant={"ghost"}
        borderRadius={"0 20px 20px 0"}
        >
            <AiOutlineSend size={20} />
        </Button>
    </HStack>
   </VStack>   
   <VStack w={'full'}
   borderLeft={['none', '1px solid white']}
   borderRight={['none', '1px solid white']}
   >
   <Heading textTransform={"uppercase"}
   textAlign={"center"}>
    Portfolio
   </Heading>
   <Text>All right received</Text>
<Heading size={'md'} textTransform={'uppercase'}>
  Social media
</Heading>
<Button variant={"link"} colorScheme={"white"}>
 <a target={'black'} ref="https://youtube.com/6packprogram"> Youtube</a>
</Button>
<Button variant={"link"} colorScheme={"white"}>
 <a target={'black'} ref="https://youtube.com/6packprogram"> Youtube</a>
</Button>
<Button variant={"link"} colorScheme={"white"}>
 <a target={'black'} ref="https://youtube.com/6packprogram"> Youtube</a>
</Button>

   </VStack> 

     </Stack>
      
    </Box>

};
export default Footer;
