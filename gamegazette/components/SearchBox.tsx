"use client";
import { Input, Text } from "@chakra-ui/react";
import * as React from "react";

import metacriticAPI from "@alepertu/metacritic-api";
const api = metacriticAPI("playstation-5");

// const [searchVal, setSearchVal] = React.useState("");

export default function SearchBox(): JSX.Element {
  const [searchResults, setSearchResults] = React.useState([]);
  const [test, setTest] = React.useState("");
  const search = async (searchText: string) => {
    // if (!searchText) {
    //   setSearchResults([]);
    //   return;
    // }
    // const results = await api.searchMetacritic(searchText);
    // setSearchResults(results);
    console.log("hello");
  };

  React.useEffect(() => {
    const initial = async () => {
      try {
        const page = await api.loadMetacriticPage("The Last of Us Part I");
        const result = await api.searchMetacritic("dishon");

        console.log(result);
        setTest(result[0].name);
      } catch (err) {
        console.error(err);
      }
    };
    initial();
  });

  return (
    <>
      <Text>{test}</Text>
      <Input
        type="search"
        placeholder="Search for your game here"
        onChange={(e) => search(e.target.value)}
      />
      {searchResults.map((result) => {
        <Text>{result.name}</Text>;
      })}
    </>
  );
}
