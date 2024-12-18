import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";
import "../App.css";

const Navbar = () => {
  const [colorMode, setColorMode] = useState("light");

  function ToggleColorMode() {
    const newColor = colorMode === "light" ? "dark" : "light";
    setColorMode(newColor);
  }

  return (
    <div className={colorMode === "light" ? "light" : "dark"}>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          <Text className="text">
            <Link to={"/"}>Nathy Store 🛒</Link>
            {/* <Link to={"/"}>Maleda microfinance</Link> */}
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <CiSquarePlus fontSize={20} />
              </Button>
            </Link>
            <Button onClick={ToggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
