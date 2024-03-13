import { useEffect } from "react";
import "./theme.css";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";

const Theme = () => {
  const [theme, setTheme] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <div className="style__switcher">
      <div className="theme__toggler" onClick={toggleTheme}>
        {theme === "light" ? <BsMoon /> : <BsSun />}
      </div>
    </div>
  );
};

export default Theme;
