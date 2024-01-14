"use client";

import { useState, useEffect } from "react";
import { useThemeContext } from "@/context/themeContext";
import { Moon, Sun1 } from "iconsax-react";

function ThemeButton() {
  const { theme, setTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-between border dark:border-gray-300 border-turquoise p-[2px] rounded-full w-auto h-auto my-3">
        {theme === "light" && (
          <button
            type="button"
            className="md:w-33 md:h-33 p-2 bg-black dark:bg-transparent rounded-full text-turquoise lg:text-[28px] md:text-[20px] sm:text-[16px]  dark:text-white"
            onClick={handleThemeSwitch}
          >
            <Sun1 />
          </button>
        )}
        {theme === "dark" && (
          <button
            type="button"
            className="md:w-33 md:h-33 p-2 dark:bg-white/20 rounded-full  lg:text-[28px] md:text-[20px] sm:text-[16px] text-turquoise dark:text-white"
            onClick={handleThemeSwitch}
          >
            <Moon />
          </button>
        )}
      </div>
    </div>
  );
}

export default ThemeButton;
