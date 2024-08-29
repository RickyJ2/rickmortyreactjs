import { useQuery } from "@apollo/client";
import { GetCharacters } from "../graphQL/query";
import { Typography } from "@mui/material";

const ListCharactersPage = () => {
    const {data, loading, error} = useQuery(GetCharacters, { variables: {page: 1}});
    if (loading) return 
    <p>Loading...</p>;
    if (error) return <p>{error.cause}</p>
    return(
        <Box>
            <Typography variant="h2">List of Char</Typography>
            <p>{data}</p>
        </Box>
    );
};

export default ListCharactersPage;