import React from 'react'
import { Box } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Container, Heading, Image, Stack, Text } from '@chakra-ui/react';

import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img5 from '../Assets/5.png'
import i11 from '../Assets/pexels-michelangelo-buonarroti-8728562.jpg'
import xx from '../Assets/gg.jpg'
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',

};

export default function Home() {
  return (
    <>
    <Box>
    <Carousel autoPlay infiniteLoop interval={20000} showArrows={false} showStatus={false} showThumbs={false}>
<Box w="full" h={'100vh'}>
<Image src={i11} h="full" w={'full'} objectFit={'cover'}/>
<Heading bgColor={'blackAlpha.800'} color={'purple.300'}  {...headingOptions}>
        Watch The Future
      </Heading>
</Box>
<Box w="full" h={'100vh'}>
<Image src={img2} h="full" w={'full'} objectFit={'cover'} />
<Heading bgColor={'blackAlpha.800'} color={'cyan.600'}  {...headingOptions}>
Future is Gaming</Heading>
</Box>
<Box w="full" h={'100vh'}>
<Image src={img3} h="full" w={'full'} objectFit={'cover'} />
<Heading bgColor={'blackAlpha.800'} color={'blue.300'}  {...headingOptions}>
Unveiling the Future</Heading>
</Box>
<Box w="full" h={'100vh'}>
<Image src={xx} h="full" w={'full'} objectFit={'cover'} />
<Heading bgColor={'blackAlpha.800'} color={'red.600'}  {...headingOptions}>
Retro Futuristic</Heading>
</Box>

</Carousel>


<Container minH={'100vh'} maxW={'container.xl'} p={16}>
<Heading textTransform={'uppercase'} py={2} textAlign={'center'}>Services</Heading>

<Stack h={'full'} p={4} alignItems={'center'} direction={['column','row']}>
<Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']}></Image>

<Text letterSpacing={'widest'} lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat provident, eius facere veritatis ea. Voluptatum quaerat earum ut laudantium dolorum expedita cum obcaecati facilis. Omnis ea minus officia pariatur facilis maxime corporis consectetur quis nihil quibusdam praesentium, hic harum aut nemo. Dolor quasi perferendis tenetur, amet corporis quo non.
</Text>
</Stack>

</Container>
    </Box>
    </>
  )
}

