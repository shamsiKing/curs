"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

function Usetranslate() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string);
  return t;
}

export default Usetranslate;
