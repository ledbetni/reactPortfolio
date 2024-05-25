import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import ContactModal from "./contactModal";

function AppBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const expandedBgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      width="100%"
      zIndex="1"
      bg={isExpanded ? expandedBgColor : bgColor}
      color={textColor}
      transition="background-color 0.3s"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
      >
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Grokking Nick
        </Heading>
        <Flex align="center">
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

          <Button onClick={toggleColorMode} marginLeft="4">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AppBar;
