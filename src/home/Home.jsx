import React from "react";
import styled from "styled-components";
import FeaturedMovie from "../components/FeaturedMovie";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background-color: #0b0b0b;
`;

const Image = styled.img`
  width: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Image
        src="https://t3.ftcdn.net/jpg/05/16/36/14/240_F_516361406_EanyWUKdEA1TaahDGuEstt23e6W1camE.jpg"
        alt=""
      />
      <FeaturedMovie />
    </Container>
  );
}
