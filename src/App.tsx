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
  const [delay, setDelay] = useState("0");
  return (
    <NumberContextProvider>
      <Container>
        <input value={delay} onChange={(e) => setDelay(e.target.value)} />
        <Button text="Generate"></Button>
        <RandomNumber />
        <PlayButton />
      </Container>
    </NumberContextProvider>
  );
}

export default App;
