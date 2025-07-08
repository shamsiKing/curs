import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const GlobalSearch = () => {
  return (
    <Button size={"icon"} variant={"outline"}>
      <Search />
    </Button>
  );
};

export default GlobalSearch;
