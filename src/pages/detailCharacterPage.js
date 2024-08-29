import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { DetailCharacter } from "../graphQL/query";
import { Avatar, Box, Typography } from "@mui/material";
import AssignLocation from "../components/assignLocation";

const DetailCharacterPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(DetailCharacter, {
    variables: { id: id || 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return (
    <Box alignContent={"center"}>
      <Avatar
        variant="square"
        src={data?.character?.image ?? ""}
        alt={data?.character?.name}
        sx={{ width: "30vw", height: "auto" }}
      />
      <Typography variant="h3">{data?.character?.name}</Typography>
      <Typography variant="h4">{`status:  ${
        data?.character?.status || "UNKNOWN"
      }`}</Typography>
      <Typography variant="h4">{`species:  ${
        data?.character?.species || "UNKNOWN"
      }`}</Typography>
      <Typography variant="h4">{`type:  ${
        data?.character?.type || "UNKNOWN"
      }`}</Typography>
      <Typography variant="h4">{`gender:  ${
        data?.character?.gender || "UNKNOWN"
      }`}</Typography>
      <AssignLocation character={data ?? {}} />
    </Box>
  );
};

export default DetailCharacterPage;
