import { useQuery } from "@apollo/client";
import { GetCharacters } from "../graphQL/query";

const ListCharactersPage = () => {
    const {data, loading, error} = useQuery(GetCharacters, { variables: {page: 1 }});
    if (loading) return 
    <p>Loading...</p>;
    if (error) return <p>{error.cause}</p>
    return(
        <Box>
            <Heading>List of Char</Heading>
            <p>{data}</p>
        </Box>
    );
};

export default ListCharactersPage;