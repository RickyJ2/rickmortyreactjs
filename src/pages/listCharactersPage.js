import { useQuery } from "@apollo/client";
import { GetCharacters } from "../graphQL/query";
import { Typography, Box } from "@mui/material";
import CharCard from "../components/charCard";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const ListCharactersPage = () => {
  const { data, loading, error } = useQuery(GetCharacters, {
    variables: { page: 1 },
  });
  const Cards = useMemo(
    () =>
      data && data.characters && data.characters.results?.length ? (
        data.characters.results.map((character) => (
          <Link to={`/detail/${character?.id}`} key={character?.id}>
            <CharCard
              charName={character?.name ?? ""}
              image={character?.image ?? ""}
            />
          </Link>
        ))
      ) : (
        <Typography variant="h3">Tidak ada karakter ditemukan</Typography>
      ),
    [data]
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.cause}</p>;
  return (
    <Box>
      <Typography variant="h2">List of Char</Typography>
      <Cards/>
    </Box>
  );
};

export default ListCharactersPage;
