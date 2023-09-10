"use client";
import { Box } from "@chakra-ui/layout";
import * as React from "react";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer>
      <Navbar />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        &copy; 2023 Karthik, Om | All Rights Reserved
      </Box>
    </footer>
  );
}
