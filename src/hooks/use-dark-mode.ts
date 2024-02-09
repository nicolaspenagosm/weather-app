import { useEffect, useState } from "react";
import { useAppDispatch } from "../store";
import { uiActions } from "../store/ui-slice/ui-slice";

const LIGHT_MODE = "light";
const DARK_MODE = "dark";
const MODE_KEY = "themeMode";

const useDarkMode = () => {
  const dispatch = useAppDispatch();
  const savedMode =
    localStorage.getItem(MODE_KEY) === LIGHT_MODE ? false : true;

  const [isDark, setIsDark] = useState<boolean>(savedMode);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem(MODE_KEY, isDark ? DARK_MODE : LIGHT_MODE);
    dispatch(uiActions.setIsDark(isDark));
  }, [isDark]);

  return {
    isDark,
    toggleTheme,
  };
};

export default useDarkMode;
