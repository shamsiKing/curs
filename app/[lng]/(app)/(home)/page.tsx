import { Translation } from "@/i18n/server";
import { lngParams } from "@/type";
import React from "react";

async function HomePage({ params: { lng } }: lngParams) {
  const { t } = await Translation(lng, "home");
  return (
    <div className="mt-24 font-spaceGrotesk-mono font-medium">{t("home")}</div>
  );
}

export default HomePage;
