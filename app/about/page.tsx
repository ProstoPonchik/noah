"use client";
import { useState, useEffect } from "react";

import FirstBlock from "../components/aboutUsComponents/FirstBlock";
import SecondBlock from "../components/aboutUsComponents/SecondBlock";
import ThirdBlock from "../components/aboutUsComponents/ThirdBlock";
import { Metadata } from "next";

interface WindowSize {
  width: number;
  height: number;
}

const AboutUs: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Check if the code is running in a browser environment before using the window object
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  return (
    <>
      <title>Noah - О нас</title>
      <div className="font-ttnorms">
        <FirstBlock windowSize={windowSize} />
        <SecondBlock windowSize={windowSize} />
        <ThirdBlock windowSize={windowSize} />
      </div>
    </>
  );
};

export default AboutUs;
