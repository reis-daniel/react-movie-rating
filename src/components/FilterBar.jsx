import React from "react";

// Styling
import styled from "styled-components";
import movies from "../data";

export default function FilterBar({ movieList, setMovieList }) {
  // Sort Movies by Title
  const sortMoviesByTitle = (order) => {
    setMovieList(
      [...movieList].sort((a, b) => {
        let titleA = a.title.toLowerCase().replace(" ", "");
        let titleB = b.title.toLowerCase().replace(" ", "");

        if (order === "asc") {
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        } else if (order === "desc") {
          if (titleA < titleB) {
            return 1;
          }
          if (titleA > titleB) {
            return -1;
          }
          return 0;
        }
      })
    );
  };

  // Sort Movies by Rating desc
  const sortMoviesByRating = () => {
    setMovieList(
      [...movieList].sort((a, b) => {
        return parseFloat(b.rate) - parseFloat(a.rate);
      })
    );
  };

  // Sort Movies by Year
  const sortMoviesByYear = (order) => {
    setMovieList(
      [...movieList].sort((a, b) => {
        if (order === "asc") {
          return parseFloat(a.year) - parseFloat(b.year);
        } else {
          return parseFloat(b.year) - parseFloat(a.year);
        }
      })
    );
  };

  return (
    <FilterStyled>
      <button
        onClick={() => {
          sortMoviesByYear("asc");
        }}
      >
        Sort by Year Ascending
      </button>
      <button
        onClick={() => {
          sortMoviesByYear("desc");
        }}
      >
        Sort by Year Descending
      </button>
      <button onClick={sortMoviesByRating}>Best Rate</button>
      <button
        onClick={() => {
          sortMoviesByTitle("asc");
        }}
      >
        A-Z
      </button>
      <button
        onClick={() => {
          sortMoviesByTitle("desc");
        }}
      >
        Z-A
      </button>
    </FilterStyled>
  );
}

const FilterStyled = styled.div`
  margin-bottom: 2rem;
  button {
    padding: 0.5rem 1.5rem;
    background-color: #333333;
    margin-right: 0.25rem;
    border: 2px solid #333333;
    &:hover {
      border-color: #5050c9;
    }
  }
`;
