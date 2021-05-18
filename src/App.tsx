import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import "./App.css";
import Button from "./components/Button/Button";
import PlayButton from "./components/PlayButton/PlayButton";
import RandomNumber from "./components/RandomNumber/RandomNumber";
import { NumberContextProvider } from "./contexts/NumberContext";
const Container = styled.div`
  background-color: #ccc;
  font-size: 26px;
  margin: 50px
`;

function App() {
  const [delay, setDelay] = useState("0");
  return (
    <NumberContextProvider>
      <Container>
        <input value={delay} onChange={(e) => setDelay(e.target.value)} />
        <p>
        <Button text="Generate"></Button>
        </p>
        <RandomNumber />
        <p>
        <PlayButton />
        </p>
      </Container>
    </NumberContextProvider>
  );
}

export default App;
