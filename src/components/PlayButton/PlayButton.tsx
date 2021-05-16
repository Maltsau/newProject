import React from "react";
import styled from "styled-components";
import { useNumberContext } from "../../contexts/NumberContext";
import speak from "../../services/speak";

const ButtonStyled = styled.button`
  color: red;
  background-color: blue;
`;

export default function () {
  const { random } = useNumberContext();
  return (
    <ButtonStyled onClick={() => speak(String(random))}>PLAY</ButtonStyled>
  );
}
