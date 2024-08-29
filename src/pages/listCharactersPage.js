import { useQuery } from "@apollo/client";
import { GetCharacters } from "../graphQL/query";
import { Typography, Box, Pagination } from "@mui/material";
import CharCard from "../components/charCard";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const ListCharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(GetCharacters, {
    variables: { page: page },
  });
  const cards = useMemo(
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
      {cards}
      <Pagination
        page={page}
        count={data.characters?.info?.pages ?? 1}
        shape="rounded"
        variant="outlined"
        onChange={(_, page) => setPage(page)}
      />
    </Box>
  );
};

export default ListCharactersPage;
