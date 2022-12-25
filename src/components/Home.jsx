import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";


const headingOptions = {
  pos:"bottom",
  left:"50",
  top:"50",
  Transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:'2',
  size:'2xl',
};
const Home = () => {
  return (
    <Box >
      
     <MyCarousel /> 
     <Container maxW={'container.xl'} minH={'100vh'} p="16">
   <Heading textTransform={"uppercase"}
   py="2"
   w={"fit-content"}
   borderBottom={'2px solid'}
   m="auto"
   >
   Services</Heading>
   <Stack
   h="full"
   p={'4'}
   alignItems={'center'}
   direction={['column', 'row']}
   >
  <Image src={img5} h={['40','200']} filter={'hue-rotate(-130deg)'} />
   <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
    Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit.
     Odio nulla blanditiis eveniet
      repudiandae similique repellat
       accusamus, laudantium quaerat suscipit unde dolore voluptates ipsum rem facilis cum tempora quos adipisci dicta.

   </Text>
   
   </Stack>


     </Container>
    </Box>
    );
  
};
const MyCarousel = ()=>(
  <Carousel autoPlay infiniteLoop 
  interval={1000}
  showStatus={false} 
  showThumbs={false}
  showArrows={false}
  >
  <Box w="full" h={'400vh'}>
    <Image src={img1} />
    <Heading bgColor={'blackAlpha.400'} 
    color={'white'} {...headingOptions}>
     watch the future
    </Heading>
  </Box>
  <Box w="full" h={'50vh'}>
    <Image src={img2} />
    <Heading bgColor={'whiteAlpha.400'} 
    color={'black'} {...headingOptions}>
     Future is Gaming
    </Heading>
  </Box>

  <Box w="full" h={'100vh'}>
    <Image src={img3} />
    <Heading bgColor={'whiteAlpha.400'} 
    color={'black'} {...headingOptions}>
     Build the Skill
    </Heading>
  </Box>
  <Box w="full" h={'100vh'}>
    <Image src={img4} />
    <Heading bgColor={'whiteAlpha.400'} 
    color={'black'} {...headingOptions}>
    Aim of life
    </Heading>
  </Box>


 </Carousel>
);

export default Home;
