// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function AppBar() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsExpanded(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`appbar ${isExpanded ? "expanded" : ""}`}>
//       <div className="appbar-content">
//         <h1 className="app-title">Grokking Nick</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="#about">About</Link>
//             </li>
//             <li>
//               <Link to="#projects">Projects</Link>
//             </li>
//             <li>
//               <Link to="#media">Media</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Me</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default AppBar;
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function AppBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      width="100%"
      zIndex="1"
      bg={isExpanded ? "gray.800" : "transparent"}
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
          <Link as={RouterLink} to="#about" marginRight="4">
            About
          </Link>
          <Link as={RouterLink} to="#projects" marginRight="4">
            Projects
          </Link>
          <Link as={RouterLink} to="/contact">
            Contact Me
          </Link>
          <Button onClick={toggleColorMode} marginLeft="4">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AppBar;
