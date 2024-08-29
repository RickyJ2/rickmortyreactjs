import { gql } from "@apollo/client";

export const GetCharacters = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const DetailCharacter = gql`
  query Chatacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      image
      species
      type
      gender
      origin {
        id
        name
      }
      episode {
        id
        name
      }
      created
    }
  }
`;
