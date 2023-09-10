"use client";
import { ChakraComponent, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { useAuth } from "../context/authContext";

export default function Navbar(): React.ReactElement {
  const links = ["About", "Explore", "Reviews", "Contact"];
  const auth = useAuth();
  console.log(auth);
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>GameGazette</Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {auth ? (
          links.map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`}>
              <Text padding={4}>{link}</Text>
            </Link>
          ))
        ) : (
          <>
            <Link href={"/login"}>
              <Text padding={4}>Login</Text>
            </Link>
            <Link href={"/signup"}>
              <Text padding={4}>Signup</Text>
            </Link>
          </>
        )}
        {/* {links.map((link) => (
          <Link href={`/${link.toLowerCase()}`}>
            <Text padding={4}>{link}</Text>
          </Link>
        ))} */}
      </Box>
    </Box>
  );
}
