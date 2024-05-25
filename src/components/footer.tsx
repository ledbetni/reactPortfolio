import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  HStack,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import ContactModal from "./contactModal";
function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const bgColor = useColorModeValue("white", "gray.800");
  const expandedBgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="footer"
      bg={isExpanded ? expandedBgColor : bgColor}
      color={textColor}
      transition="background-color 0.3s"
      py="6"
      width="100%"
    >
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <Stack>
            <Text>&copy; {new Date().getFullYear()} Nicholas Ledbetter</Text>
          </Stack>
          <Stack direction={["column", "row"]} spacing="4" align="center">
            <Link
              as={RouterLink}
              to="#about"
              onClick={scrollToTop}
              marginRight="4"
            >
              About
            </Link>
            <Link
              as={RouterLink}
              to="#projects"
              onClick={scrollToProjects}
              marginRight="4"
            >
              Projects
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicholas-ledbetter-b59073241/"
              isExternal
              marginRight="4"
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/ledbetni" isExternal marginRight="4">
              GitHub
            </Link>
            <ContactModal />
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
}

export default Footer;
