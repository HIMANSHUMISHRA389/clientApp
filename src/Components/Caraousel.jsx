import { Box, Heading, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Caraousel = () => {
    return <Stack minW="100vw" bgColor="red" display="flex" alignItems="center" mt="-0.5%">
        <Box maxW="100vw" overflow="hidden">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <Box>
          <img src="https://progressiveminds.in/images/slide/4.png" alt="Slide 1" style={{ width: '100vw', height: '40vw' }} />
          
        </Box>
        <Box>
          <img src="https://progressiveminds.in/images/slide/3.png" alt="Slide 2" style={{ width: '100vw',height: '40vw'  }} />
       
        </Box>
        <Box>
          <img src="https://progressiveminds.in/images/slide/Website%20Main%20Banner%20Pic%201.png" alt="Slide 3" style={{ width: '100vw', height: '40vw' }} />
       
        </Box>
      </Carousel>
    </Box>
    </Stack>
}
export default Caraousel