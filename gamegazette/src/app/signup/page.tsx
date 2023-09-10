"use client";
import * as React from "react";
import * as cheerio from "cheerio";

import axios from "axios";
import { useAuth } from "../../../context/authContext";

export default function Signup(): JSX.Element {
  React.useEffect(() => {
    async function callPage() {
      let baseUrl = "http://www.metacritic.com/game/";
      const system = "playstation-4";
      const sanitizedGameName = "God Of War"
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z\d?!-]+/g, "");
      const url = `${baseUrl}${system}/${sanitizedGameName}`;
      const get = await axios.get(url);
      const response = get.data;
      return response;
    }
    callPage();
  });
  const auth = useAuth();
  return <div>Signup</div>;
}
