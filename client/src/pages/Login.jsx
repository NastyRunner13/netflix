import React, { useRef, useState } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg");
  background-size: cover;
  position: relative;
`;

const Top = styled.div``;

const Wrappper = styled.div`
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Form = styled.form`
  width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 5px;
  background-color: #0b0b0b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextH1 = styled.h1``;

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  background-color: gray;
  color: white;
  padding-left: 10px;

  &::placeholder {
    color: lightgray;
  }
`;

const LoginButton = styled.button`
  height: 40px;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const Span = styled.span`
  color: lightgray;
`;

const B = styled.b`
  color: white;
`;

const Small = styled.small``;

export default function Login() {
  return (
    <RegisterContainer>
      <Top>
        <Wrappper>
          <Image
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </Wrappper>
      </Top>
      <Container>
        <Form>
          <TextH1>Sign In</TextH1>
          <Input type="email" placeholder="Email or phone number" />
          <Input type="password" placeholder="password" />
          <LoginButton>Sign In</LoginButton>
          <Span>
            New to Netflix?<B> Sign up now.</B>
          </Span>
          <Small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<B> Learn More</B>
          </Small>
        </Form>
      </Container>
    </RegisterContainer>
  );
}
