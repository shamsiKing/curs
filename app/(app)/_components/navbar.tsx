import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import GlobalSearch from "./global-search";
import LanguageMenu from "@/components/shared/language-menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import ModeToggle from "@/components/shared/mode-toggle";

const Navbar = () => {
  return (
    <div className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <h1 className="text-xl text-muted-foreground">OnlyCourses</h1>
          <div className="flex items-center gap-3 border-1 pl-2">
            {navLinks.map((nav) => (
              <Link
                href={`/${nav.route}`}
                key={nav.route}
                className="font-medium transition-all hover:text-blue-500 hover:underline"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>{" "}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border-r pr-3">
            <GlobalSearch />
            <LanguageMenu />
            <Button size="icon" variant={"ghost"}>
              <ShoppingCart />
            </Button>{" "}
            <ModeToggle />
          </div>
          <Button variant={"ghost"} size={"lg"} className="rounded-full">
            login in
          </Button>
          <Button variant={"default"} size={"lg"} className="rounded-full">
            sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
