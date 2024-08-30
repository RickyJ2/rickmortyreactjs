import { Alert, Box, Button, Collapse, IconButton, TextField, Typography } from "@mui/material";
import { addLocation } from "../localStorage";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { DetailCharacter } from "../graphQL/query";
import { useParams } from "react-router-dom";

const AssignLocation = () => {
  const { id } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
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
      <Typography variant="h6">Assign Location</Typography>
      <Typography fontSize={"1.5rem"}> Assign this character to designed location </Typography>
      <Collapse in={isSuccess}>
      <Alert onClose={()=>{setIsSuccess(false)}} severity="success">Location successfully assigned!</Alert>
      </Collapse>
      <TextField
        value={location}
        label="assigned location"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        onChange={(input) => {
          setLocation(input.target.value);
        }}
      />
      <Button disabled={location.length <= 0} onClick={submit} variant="contained">
        Assign
      </Button>
    </Box>
  );
};

export default AssignLocation;
