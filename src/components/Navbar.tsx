import { Stack } from "@mui/material";
import Logo from "./Logo";
import ManuBar from "./MenuBar";

const Navbar = () => {
  return (
    <Stack
      maxHeight="50px"
      alignItems="center"
      component="nav"
      direction="row"
      justifyContent="space-between"
    >
      <Logo />
      <ManuBar />
    </Stack>
  );
};

export default Navbar;
