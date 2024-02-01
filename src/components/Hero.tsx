import { Container, Stack } from "@mui/material";
import ActionButton from "./ActionButton";
import H1 from "./H1";

const Hero = () => {
  return (
    <Container>
      <Stack
        component="section"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          minHeight: "calc(100vh - 70px)",
        }}
      >
        &nbsp;
        <H1 />
        <ActionButton />
      </Stack>
    </Container>
  );
};

export default Hero;
