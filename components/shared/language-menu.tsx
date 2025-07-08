import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Languages } from "lucide-react";
import { lngs } from "@/constants";
import Image from "next/image";

const LanguageMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {lngs.map((item) => (
            <DropdownMenuItem key={item.route} className="cursor-pointer">
              <Image
                src={`/assets/${item.route}.jpg`}
                alt={item.label}
                width={30}
                height={30}
              />
              <span className="ml-2 font-spaceGrotesk-mono font-medium">
                {item.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageMenu;
