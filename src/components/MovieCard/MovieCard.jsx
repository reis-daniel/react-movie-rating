// React
import React from "react";
// Components
import Rating from "./Rating";
// Styling
import styled from "styled-components";

export default function MovieCard({
  title,
  year,
  director,
  duration,
  rate,
  genre,
}) {
  return (
    <CardContainer>
      <PrimaryDataContainer>
        <h2 className="movie-title">{title}</h2>
        <h2>{year}</h2>
        <h3>{director}</h3>
        <h3>{duration}</h3>
        <Rating rating={rate} />
      </PrimaryDataContainer>
      <ul>
        {genre.map((genre, index) => {
          return (
            <li key={title.replace(/\s/g, "").toLowerCase() + index}>
              {genre}
            </li>
          );
        })}
      </ul>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  min-height: 25rem;
  padding: 1.5rem 1.5rem;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  .movie-title {
    //min-height: 8rem;
    font-size: 1.25rem;
  }
  h2,
  h3 {
    font-size: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;

const PrimaryDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;
