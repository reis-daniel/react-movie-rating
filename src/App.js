// Components
import MovieCard from "./components/MovieCard/MovieCard";

// Data
import data from "./data";

// Styling
import GlobalStyle from "./globalStyle";
import styled from "styled-components";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      {data.map((movie, index) => {
        return (
          <MovieCard
            key={index + movie.year}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            genreList={movie.genre}
            rating={movie.rate}
          />
        );
      })}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  padding: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: minmax(0, 1fr);
`;
