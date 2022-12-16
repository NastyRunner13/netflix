import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const WatchContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  cursor: pointer;
  z-index: 2;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Watch() {
  return (
    <WatchContainer>
      <Back>
        <ArrowBackOutlined />
        Home
      </Back>
      <Video
        autoplay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4"
      />
    </WatchContainer>
  );
}
