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
    <Box>
      <Avatar src={data?.character?.image ?? ""} alt={data?.character?.name} />
      <Typography variant="h3">{data?.character?.name}</Typography>
      <Typography variant="h3">{data?.character?.status}</Typography>
      <AssignLocation />
    </Box>
  );
};

export default DetailCharacterPage;
