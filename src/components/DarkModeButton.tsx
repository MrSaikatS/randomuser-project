import { darkAtom } from "@/utils/atoms";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import { useEffect } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const DarkModeButton = () => {
  const [dark, setDark] = useAtom(darkAtom);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Button isIconOnly onPress={() => setDark(!dark)}>
        {dark ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};

export default DarkModeButton;
