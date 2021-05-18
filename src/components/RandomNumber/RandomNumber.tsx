import React from "react";
import styled from "styled-components";
import { useNumberContext } from "../../contexts/NumberContext";

const Container = styled.span`
  color: black;
  background-color: white;
`;
type RandomNumberType = {
  number?: string;
};

export default function ({}: RandomNumberType) {
  const { random } = useNumberContext();
  return <Container>{random}</Container>;
}
