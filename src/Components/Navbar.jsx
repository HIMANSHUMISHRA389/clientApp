import React from 'react';
import { Flex, Heading, HStack, useBreakpointValue, IconButton, Box } from "@chakra-ui/react";
import { MdLocationOn, MdEmail, MdMenu } from 'react-icons/md';
import { PiFacebookLogoThin, PiTwitterLogoDuotone } from 'react-icons/pi';
import { FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';



const Navbar = () => {
    const showSocialIcons = useBreakpointValue({ base: false, md: true });

  return (
    <Flex bgColor="#222163" height="6vh" alignItems="center" justifyContent="space-around" minW="100vw" padding="1rem">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading
          color="rgb(165,165,165)"
          fontFamily="Metropolis, sans-serif"
          fontStyle="normal"
          fontWeight="300"
          lineHeight={{ base: '21px', md: '24px', lg: '28px' }}
          fontSize={{ base: '16px', md: '18px', lg: '20px' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex align="center" justify="center" mb={{ base: 2, md: 0 }} mr={{ md: 4 }} whiteSpace="nowrap" flex="1">
            <MdLocationOn size="20px" style={{ marginRight: '8px' }} /> Mayur Vihar, Noida Extension, Crossing Republic
          </Flex>
          <Flex align="center" justify="center" flex="1">
            <MdEmail size="20px" style={{ marginRight: '8px', marginLeft: '12px' }} /> support@progressiveminds.in
          </Flex>
        </Heading>
      </Flex>

      {showSocialIcons ? (
        <HStack alignItems="center" justifyContent="space-around" gap="1.5rem">
          <PiFacebookLogoThin color="rgb(165,165,165)" size="24px" />
          <PiTwitterLogoDuotone color="rgb(165,165,165)" size="24px" />
          <FaWhatsapp color="rgb(165,165,165)" size="24px" />
          <FaYoutube color="rgb(165,165,165)" size="24px" />
          <FaInstagram color="rgb(165,165,165)" size="24px" />
        </HStack>
      ) : (
        <IconButton
          aria-label="Open menu"
          icon={<MdMenu size="24px" color="rgb(165,165,165)" />}
          variant="ghost"
        />
      )}
    </Flex>
  );
}
export default Navbar