import { DragHandle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const MenuBar = () => {
  return (
    <IconButton size="large" color="primary" sx={{
      p: 0
    }}>
      <DragHandle sx={{
        fontSize: "3rem"
        
      }}/>
    </IconButton>
  );
};

export default MenuBar;
