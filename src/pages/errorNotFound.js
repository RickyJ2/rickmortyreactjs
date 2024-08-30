import { Box, Typography } from "@mui/material";

const ErrorNotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h3">404 Page Not Found</Typography>
    </Box>
  );
};

export default ErrorNotFound;
