import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Button/Button";
import PlayButton from "./components/PlayButton/PlayButton";
import RandomNumber from "./components/RandomNumber/RandomNumber";
import { NumberContextProvider } from "./contexts/NumberContext";
import speak from "./services/speak";

const Container = styled.div`
  height: 100vh;
  font-size: 26px;
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: max-content 1fr max-content;
  grid-row-gap: 16px;
`;

const Body = styled.div`
  grid-column: span 2;
  align-self: center;
  justify-self: center;
`;

function App() {
  const [delay, setDelay] = useState("0");
  const [random, setRandom] = useState("0");
  return (
    <Container>
      <input value={delay} onChange={(e) => setDelay(e.target.value)} />
      <Button text="Generate" onClick={() => setRandom("12")}></Button>
      <Body>TEST</Body>
      <RandomNumber number={random} />
      <PlayButton onClick={() => speak(String(random))} />
    </Container>
  );
}

export default App;
