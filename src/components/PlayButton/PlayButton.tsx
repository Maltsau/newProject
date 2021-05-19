import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  color: red;
  background-color: blue;
`;

export default function ({ onClick }: { onClick: () => void }) {
  return <ButtonStyled onClick={onClick}>PLAY</ButtonStyled>;
}
