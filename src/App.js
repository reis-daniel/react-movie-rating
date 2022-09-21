// React
import { useState } from "react";

// Components
import MovieCard from "./components/MovieCard/MovieCard";
import FilterBar from "./components/FilterBar";

// Data
import data from "./data";

// Styling
import GlobalStyle from "./globalStyle";
import styled from "styled-components";

function App() {
  // Saving the movie list to a state, so the component get rerendered, when the list is sorted inside the component FilterBar.
  const [movieList, setMovieList] = useState(data);

  return (
    <MainContainer>
      <GlobalStyle />
      <FilterBar movieList={movieList} setMovieList={setMovieList} />
      <MovieList>
        {movieList.map((movie, index) => {
          return (
            <MovieCard
              key={index + movie.year}
              {...movie}
              //title={movie.title}
              // year={movie.year}
              // director={movie.director}
              // duration={movie.duration}
              // genreList={movie.genre}
              // rating={movie.rate}
            />
          );
        })}
      </MovieList>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: block;
  padding: 2rem;
`;

const MovieList = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: minmax(0, 1fr);
`;
