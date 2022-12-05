import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const NavBar = styled.div`
  color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
`;

const Container = styled.div`
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 25px;
  margin-right: 40px;
  cursor: pointer;
`;

const Link = styled.span`
  margin-right: 20px;
  cursor: pointer;
`;

const LeftLink = styled.span`
  cursor: pointer;
`;

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

const Options = styled.div`
  display: none;
  background-color: #0b0b0b;
  border-radius: 5px;
`;

const Profile = styled.div`
  &:hover {
    ${Options} {
      display: flex;
      flex-direction: column;
      position: absolute;
    }
  }
`;

const OptionLinks = styled.span`
  padding: 10px;
  cursor: pointer;
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <NavBar
      style={
        isScrolled
          ? {
              backgroundColor: "#0b0b0b",
              transition: "background-color 1s ease",
            }
          : null
      }
    >
      <Container>
        <Left>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <Link>Home</Link>
          <Link>Series</Link>
          <Link>Movies</Link>
          <Link>New and Popular</Link>
          <Link>My List</Link>
        </Left>
        <Right>
          <Search style={{ margin: "0px 20px", cursor: "pointer" }} />
          <LeftLink>KID</LeftLink>
          <Notifications style={{ margin: "0px 20px", cursor: "pointer" }} />
          <Avatar
            src="https://t3.ftcdn.net/jpg/05/16/36/14/240_F_516361406_EanyWUKdEA1TaahDGuEstt23e6W1camE.jpg"
            alt=""
          />
          <Profile>
            <ArrowDropDown style={{ margin: "0px 20px", cursor: "pointer" }} />
            <Options>
              <OptionLinks>Settings</OptionLinks>
              <OptionLinks>Logout</OptionLinks>
            </Options>
          </Profile>
        </Right>
      </Container>
    </NavBar>
  );
}
