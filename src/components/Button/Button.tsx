import React from "react";
import styled from "styled-components";
import useRandomHook from "../RandomNumber/hooks/useRandomHook";

const ButtonStyled = styled.button`
  color: red;
  background-color: blue;
`;

type ButtonType = { text: string; onClick?: () => void };

export default function ({ text, onClick }: ButtonType) {
  const setRandom = useRandomHook();
  return (
    <ButtonStyled
      onClick={() => {
        setRandom(12);
      }}
    >
      {text}
    </ButtonStyled>
  );
}
