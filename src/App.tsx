import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Button/Button";
import PlayButton from "./components/PlayButton/PlayButton";
import RandomNumber from "./components/RandomNumber/RandomNumber";
import { NumberContextProvider } from "./contexts/NumberContext";
const Container = styled.div`
  font-size: 26px;
`;

function App() {
  return (
    <NumberContextProvider>
      <Container>
        <Button text="Generate"></Button>
        <RandomNumber />
        <PlayButton />
      </Container>
    </NumberContextProvider>
  );
}

export default App;
