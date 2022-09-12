import React from "react";
// Styling
import styled from "styled-components";

export default function Rating(props) {
  const movieRating = Math.floor(props.rating);

  let hasHalfStars = false;
  let numEmptyStars = 10 - movieRating;

  if (props.rating % 1 === 0) {
    hasHalfStars = false;
  } else {
    hasHalfStars = true;
    numEmptyStars = 10 - (movieRating + 1);
  }

  return (
    <StarContainer>
      {/* Full Stars */}
      {[...Array(movieRating)].map((star, index) => {
        return (
          <span
            key={"fs" + index}
            className="material-symbols-outlined rate_full"
          >
            star_rate
          </span>
        );
      })}

      {/* Half Stars */}
      {hasHalfStars ? (
        <span className="material-symbols-outlined rate_full">
          star_rate_half
        </span>
      ) : null}

      {/* Empty Stars */}
      {numEmptyStars > 0
        ? [...Array(numEmptyStars)].map((star, index) => {
            return (
              <span
                key={"fs" + index}
                className="material-symbols-outlined rate_empty"
              >
                star_rate
              </span>
            );
          })
        : null}
    </StarContainer>
  );
}

const StarContainer = styled.div`
  display: flex;
  span {
    color: yellow;
    &.rate_full {
      font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    }
    &.rate_empty {
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
      opacity: 0.5;
    }
  }
`;
