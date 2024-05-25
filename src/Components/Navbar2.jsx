import { Box, Button, Flex, Heading, Image, Tab, TabList, Text } from "@chakra-ui/react"

const Navbar2 = () => {
    const linkStyles = {
        fontFamily: 'Metropolis, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '26px',
        color: 'black',
        lineHeight: '24px',
        textDecoration: 'none', // Optional: Remove underline
        marginRight: '20px',
        whiteSpace:'nowrap'
    };
    return <Flex as="nav" minW="100vw" bgColor="#FF6766" h="10vh" marginTop="-0.5%" alignItems="center" justifyContent="space-around">
        <Flex flex="1" justifyContent="center">
            <Box display="flex" alignItems="center" width="45%" justifyContent="space-around">
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src="https://progressiveminds.in/images/logopm.jpg"
                    alt='Dan Abramov'
                />
                <Heading >Progresive Minds</Heading>
            </Box>



        </Flex>

        <Flex flex="1" alignItems="center" justifyContent="flex-start" >
            <Flex width="100%" justifyContent="flex-start" alignItems="center" style={{ listStyle: 'none' }} padding="0 5%">


                <a href="#section1" style={linkStyles}>
                    Home
                </a>

                <li>
                    <a href="#section2" style={linkStyles}>
                        Courses
                    </a>
                </li>
                <li>
                    <a href="#section3" style={linkStyles}>
                        About us
                    </a>
                </li>
                <li>
                    <a href="#section3" style={linkStyles}>
                        FaQs
                    </a>
                </li>
                <li>
                    <a href="#section3" style={linkStyles}>
                        Contact us
                    </a>
                </li>

                <Button borderRadius="25px" width="10rem" height="4rem" bgColor="#FF6766" border="3px solid teal">Sign in</Button>
            </Flex>
        </Flex>
    </Flex>
}
export default Navbar2