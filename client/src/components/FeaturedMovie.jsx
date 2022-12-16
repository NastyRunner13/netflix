import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  top: 80px;
  left: 50px;
  font-size: 30px;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.span``;

const Select = styled.select`
  cursor: pointer;
  background-color: #0b0b0b;
  border: 1px solid white;
  color: white;
  margin-left: 20px;
  padding: 5px;
`;

const Option = styled.option``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 35%;
  position: absolute;
  left: 50px;
  bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const MovieImage = styled.img`
  width: 400px;
`;

const Desc = styled.span`
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;

  &.play {
    background-color: white;
    color: #0b0b0b;
  }

  &.more {
    background-color: gray;
    color: white;
  }
`;

const Text = styled.span`
  margin-left: 5px;
`;

export default function FeaturedMovie({ type }) {
  return (
    <Container>
      {type && (
        <Category>
          <CategoryText>{type === "movie" ? "Movies" : "Series"}</CategoryText>
          <Select name="genre" id="genre">
            <Option>Genre</Option>
            <Option value="adventure">Adventure</Option>
            <Option value="comedy">Comedy</Option>
            <Option value="crime">Crime</Option>
            <Option value="fantasy">Fantasy</Option>
            <Option value="historical">Historical</Option>
            <Option value="horror">Horror</Option>
            <Option value="romance">Romance</Option>
            <Option value="sci-fi">Sci-fi</Option>
            <Option value="thriller">Thriller</Option>
            <Option value="western">Western</Option>
            <Option value="animation">Animation</Option>
            <Option value="drama">Drama</Option>
            <Option value="documentary">Documentary</Option>
          </Select>
        </Category>
      )}
      <Image
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <Info>
        <MovieImage
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </Desc>
        <ButtonContainer>
          <Button className="play">
            <PlayArrow />
            <Text>Play</Text>
          </Button>
          <Button className="more">
            <InfoOutlined />
            <Text>Info</Text>
          </Button>
        </ButtonContainer>
      </Info>
    </Container>
  );
}
