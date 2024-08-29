import { Box, Button, TextField, Typography } from "@mui/material";
import { addLocation } from "../localStorage";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AssignLocation = () => {
  const { id } = useParams();
  const [location, setLocation] = useState("");

  const submit = () => {
    addLocation(location, id);
    setLocation("");
  };

  return (
    <Box>
      <Typography variant="h3">Assign AssignLocation</Typography>
      <Typography variant="h4"> Masukkan lokasi yang diinginkan </Typography>
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
      <Button onClick={submit}>Assign</Button>
    </Box>
  );
};

export default AssignLocation;
