'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function StyleSwitcher() {
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    setIsLight(!isLight);

    const homeImage = document.getElementById("home-image")as HTMLImageElement | null;
    const logoImage = document.getElementById("logo-image")as HTMLImageElement | null;

    if (document.body.classList.contains("light")) {
      homeImage && (homeImage.src = "/assets/images/SFDarkLogo.png");
      logoImage && (logoImage.src = "/assets/images/Logo/CompanyLogo_white.svg");
    } else {
      homeImage && (homeImage.src = "/assets/images/SFLightLogo.png");
      logoImage && (logoImage.src = "/assets/images/Logo/CompanyLogo_black.svg");
    }
  };

  useEffect(() => {
    setIsLight(document.body.classList.contains("light"));
  }, []);

  return (
  <div className="theme-toggle-wrapper">
    <label className="theme-switch">
      <input type="checkbox" checked={isLight} onChange={toggleTheme} />
      <span className="slider">
        <FontAwesomeIcon
          icon={isLight ? faSun : faMoon}
          className="switch-icon"
        />
      </span>
    </label>
  </div>
);
}


