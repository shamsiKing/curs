"use client";

import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { Localization } from "@/lib/utils";

interface ClerkThemeProviderProps {
  lng: string;
  children: ReactNode;
}

const ClerkThemeProvider = ({ children, lng }: ClerkThemeProviderProps) => {
  const { resolvedTheme } = useTheme();
  const local = Localization(lng);
  return (
    <ClerkProvider
      localization={local}
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
        variables: {},
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkThemeProvider;
