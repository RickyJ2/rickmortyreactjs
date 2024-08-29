import { useMemo } from "react";
import { getLocationOnly } from "../localStorage";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ListLocationsPage = () => {
  const listLocs = useMemo(() => getLocationOnly(), []);

  if (!listLocs || listLocs.length <= 0) return <p>Tidak ada lokasi</p>;
  return (
    <Box>
      {listLocs.map((loc) => (
        <Typography>{loc}</Typography>
      ))}
    </Box>
  );
};

export default ListLocationsPage;
