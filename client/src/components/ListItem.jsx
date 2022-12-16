import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ListItemContainer = styled.div`
  width: 225px;
  height: 120px;
  background-color: #0b0b0b;
  margin-right: 5px;
  cursor: pointer;
  overflow: hidden;
  color: white;

  &:hover {
    width: 325px;
    height: 300px;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.18);
    -moz-box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.18);
    box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.18);
    border-radius: 5px;

    ${Image} {
      height: 140px;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  height: 140px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 10px;
  .icon {
    border: 2px solid white;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 16px;
  }
`;

const ItemInfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
  .limit {
    border: 1px solid gray;
    padding: 1px 3px;
    margin: 0 10px;
  }
`;

const Info = styled.span``;

const Description = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;

const Genre = styled.div`
  font-size: 14px;
  color: lightgray;
`;

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <ListItemContainer
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Image
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <Video src={trailer} autoPlay={true} loop />
          <ItemInfo>
            <Icons>
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </Icons>
            <ItemInfoTop>
              <Info>1 hour 14 minutes </Info>
              <Info className="limit">+16</Info>
              <Info>1999</Info>
            </ItemInfoTop>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </Description>
            <Genre>Action</Genre>
          </ItemInfo>
        </>
      )}
    </ListItemContainer>
  );
}
