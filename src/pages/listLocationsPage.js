import { useMemo, useState } from "react";
import { getCharsByLocation, getLocationOnly } from "../localStorage";
import { Box } from "@mui/system";
import { MenuItem, Select, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CharCard from "../components/charCard";

const ListLocationsPage = () => {
  const [selectedLoc, setSelectedLoc] = useState(null);
  const listLocs = useMemo(() => getLocationOnly(), []);
  const listChar = useMemo(() => {
    if (!selectedLoc) return;
    const listChar = getCharsByLocation(selectedLoc);
    if (!listChar || listChar.length <= 0) {
      return;
    }
    return listChar.map((character) => (
      <Link to={`/detail/${character?.id}`} key={character?.id}>
        <CharCard
          charName={character?.name ?? ""}
          image={character?.image ?? ""}
        />
      </Link>
    ));
  }, [selectedLoc]);

  if (!listLocs || listLocs.length <= 0)
    return <p>There are no locations assign yet</p>;
  return (
    <Box width={"80vw"}>
      <Select
        value={selectedLoc}
        onChange={(event) => setSelectedLoc(event.target.value)}
        fullWidth
      >
        {listLocs.map((loc) => (
          <MenuItem value={loc}>{loc}</MenuItem>
        ))}
      </Select>
      {listChar}
    </Box>
  );
};

export default ListLocationsPage;
