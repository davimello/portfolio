import { Button, useColorMode } from "bumbag";
import { Moon, Sun } from 'react-feather'

const DarkMode = () => {
  const {colorMode, setColorMode} = useColorMode()
  const toggle = () => setColorMode(colorMode === 'dark' ? 'default' : 'dark')

  return <Button variant="link" _hover={{ color: "terciary" }} onClick={toggle}>{colorMode === 'dark' ? <Sun /> : <Moon />}</Button>
};
export default DarkMode;