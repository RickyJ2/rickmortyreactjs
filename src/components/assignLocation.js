import { Box, Button, TextField, Typography } from "@mui/material";
import { addLocation } from "../localStorage";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { DetailCharacter } from "../graphQL/query";
import { useParams } from "react-router-dom";
const AssignLocation = ({ character }) => {
  const { id } = useParams();
  const [location, setLocation] = useState("");
  const { data } = useQuery(DetailCharacter, {
    variables: { id: id || 1 },
  });
  const submit = () => {
    addLocation(location, {
      id: data?.character?.id,
      name: data?.character?.name,
      image: data?.character?.image,
    });
    setLocation("");
  };

  return (
    <Box marginTop={10}>
      <Typography variant="h4">Assign Location</Typography>
      <Typography variant="h5"> Masukkan lokasi yang diinginkan </Typography>
      <TextField
        value={location}
        label="lokasi"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        onChange={(input) => {
          console.log(input.target.value);
          setLocation(input.target.value);
        }}
      />
      <Button onClick={submit} variant="contained">
        Assign
      </Button>
    </Box>
  );
};

export default AssignLocation;
