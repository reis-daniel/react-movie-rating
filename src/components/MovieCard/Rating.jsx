import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React, { startTransition } from "react";
// Styling
import styled from "styled-components";

export default function Rating(props) {
  const movieRating = Math.floor(props.rating);

  const stars = [];
  for (let i = 0; i < movieRating; i++) {
    stars.push("full");
  }

  let hasHalfStars = false;
  let numEmptyStars = 10 - movieRating;

  if (props.rating % 1 === 0) {
    hasHalfStars = false;
    for (let i = 0; i < numEmptyStars; i++) {
      stars.push("empty");
    }
  } else {
    hasHalfStars = true;
    numEmptyStars = 10 - (movieRating + 1);
    stars.push("half");
    for (let i = 0; i < numEmptyStars; i++) {
      stars.push("empty");
    }
  }

  return (
    <StarContainer>
      {stars.map((star, index) => {
        //return <span>{star}</span>;
        return star === "full" ? (
          <span
            key={"fs" + index}
            className="material-symbols-outlined rate_full"
          >
            star_rate
          </span>
        ) : star === "half" ? (
          <span
            key={"hs" + index}
            className="material-symbols-outlined rate_full"
          >
            star_rate_half
          </span>
        ) : (
          <span
            key={"es" + index}
            className="material-symbols-outlined rate_empty"
          >
            star_rate
          </span>
        );
      })}
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
