import { Layout } from "@/type";
import React from "react";
import Navbar from "./_components/navbar";

const layout = ({ children }: Layout) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
