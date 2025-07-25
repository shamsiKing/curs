import { ChildProps } from "@/type";
import React from "react";
import Navbar from "./(home)/_components/navbar";

const layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
