import React from "react";
import { useTranslation } from "react-i18next";
import aboutData from "../data/about.json";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative"
    >
      {/* Selector de idioma */}

      <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("hero.title")}</h1>

      <p className="text-lg md:text-xl text-muted max-w-2xl">
        {t("hero.subtitle")}
      </p>

      <br />

      <p className="text-lg md:text-xl text-muted max-w-2xl">
        {t(aboutData.descriptionKey)}
      </p>
    </section>
  );
};

export default Hero;
