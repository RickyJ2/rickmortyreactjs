import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { DetailCharacter } from "../graphQL/query";
import { Avatar, Box, Typography } from "@mui/material";
import AssignLocation from "../components/assignLocation";
import LoadingPage from "./loadingPage";

const DetailCharacterPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(DetailCharacter, {
    variables: { id: id || 1 },
  });

  if (loading) return <LoadingPage/>;
  if (error) return <p>error</p>;
  return (
    <Box alignContent={"center"}>
      <Avatar
        variant="square"
        src={data?.character?.image ?? ""}
        alt={data?.character?.name}
        sx={{ width: "30vw", height: "auto" }}
      />
      <Typography variant="h5">{data?.character?.name}</Typography>
      <Typography fontSize="1.5rem">{`status:  ${
        data?.character?.status || "UNKNOWN"
      }`}</Typography>
      <Typography fontSize="1.5rem">{`species:  ${
        data?.character?.species || "UNKNOWN"
      }`}</Typography>
      <Typography fontSize="1.5rem">{`type:  ${
        data?.character?.type || "UNKNOWN"
      }`}</Typography>
      <Typography fontSize="1.5rem">{`gender:  ${
        data?.character?.gender || "UNKNOWN"
      }`}</Typography>
      <AssignLocation/>
    </Box>
  );
};

export default DetailCharacterPage;
