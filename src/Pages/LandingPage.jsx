import { Box, Stack } from "@chakra-ui/react"
import Navbar from "../Components/Navbar"
import Navbar2 from "../Components/Navbar2"
import Caraousel from "../Components/Caraousel"
import Welcome from "../Components/Welcome"

const LandingPage=()=>{
return <Stack minW="100vw" minH="100vh" >
<Navbar/>
<Navbar2/>
<Caraousel/>
<Welcome/>
</Stack>
}
export default LandingPage