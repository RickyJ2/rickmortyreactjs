import { Box } from "@mui/material";
import Header from "./header";

const Layout = ({ children }) => (
  <Box
    paddingTop={"16vh"}
    display={"flex"}
    alignItems={"center"}
    flex={1}
    flexDirection={"column"}
    minHeight={"84vh"}
  >
    <Header />
    <Box display={"flex"} flex={1} flexDirection={"column"}>
      {children}
    </Box>
  </Box>
);

export default Layout;
