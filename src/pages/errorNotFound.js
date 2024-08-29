import { Box, Typography } from "@mui/material";

const ErrorNotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h2">404 Halaman tidak ditemukan</Typography>
    </Box>
  );
};

export default ErrorNotFound;
