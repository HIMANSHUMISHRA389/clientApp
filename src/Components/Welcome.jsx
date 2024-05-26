import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react"

const Welcome = () => {



    return <Flex height="10vh" minW="100vw" direction="column">
        <Heading color="black" textAlign="center" width="100%">Welcome To Progressive Minds</Heading>
        <Flex flexWrap="wrap" bgColor="teal" justifyContent="space-around" alignItems="center">
            <Box>
                <Image src="https://progressiveminds.in/images/icons/4.png" />
            </Box>
            <Box>
                <Image src="https://progressiveminds.in/images/icons/4.png" />
            </Box>
            <Box>
                <Image src="https://progressiveminds.in/images/icons/4.png" />
            </Box>
            <Box>
                <Image src="https://progressiveminds.in/images/icons/4.png" />
            </Box>
        </Flex>
    </Flex>
}
export default Welcome