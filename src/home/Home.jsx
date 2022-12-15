import React from "react";
import styled from "styled-components";
import FeaturedMovie from "../components/FeaturedMovie";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background-color: #0b0b0b;
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <FeaturedMovie type="movie" />
      <List />
      <List />
      <List />
      <List />
    </Container>
  );
}
