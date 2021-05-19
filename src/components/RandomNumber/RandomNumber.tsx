import React from "react";
import styled from "styled-components";

const Container = styled.span`
  color: black;
  background-color: green;
`;

const Letter = styled.span<{ isHighlighted: boolean }>`
  color: ${({ isHighlighted }) => (isHighlighted ? "red" : "black")};
`;

type RandomNumberType = {
  number: string;
  highlight: number;
};

export default function ({ number, highlight = 0 }: RandomNumberType) {
  return (
    <Container>
      {[...number].map((character, i) => (
        <Letter isHighlighted={i === highlight}>{character}</Letter>
      ))}
    </Container>
  );
}
