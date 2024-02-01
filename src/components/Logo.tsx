import { Box, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

const Logo = () => {
  return <Typography variant="h6" ><Box color={orange[200]} component="span">Sea</Box>Monie<Box fontWeight={600} component="span">BTC</Box></Typography>;
};

export default Logo;
