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

const LoginButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
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

const TextH1 = styled.h1`
  font-size: 50px;
`;
const TextH2 = styled.h2``;

const TextP = styled.p`
  font-size: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
`;
const Form = styled.form`
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
`;

const Input = styled.input`
  flex: 9;
  height: 100%;
  border: none;
  padding: 0 10px;
`;

const RegisterButton = styled.button`
  flex: 3;
  height: 100%;
  background-color: red;
  color: white;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <RegisterContainer>
      <Top>
        <Wrappper>
          <Image
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <LoginButton>Sign In</LoginButton>
        </Wrappper>
      </Top>
      <Container>
        <TextH1>Unlimited movies, TV shows, and more.</TextH1>
        <TextH2>Watch anywhere. Cancel anytime.</TextH2>
        <TextP>
          Ready to watch? Enter your email to create or restart your membership.
        </TextP>
        {!email ? (
          <InputContainer>
            <Input type="email" placeholder="email address" ref={emailRef} />
            <RegisterButton onClick={handleSart}>Get Started</RegisterButton>
          </InputContainer>
        ) : (
          <Form>
            <Input type="password" placeholder="password" ref={passwordRef} />
            <RegisterButton onClick={handleFinish}>
              Start membership
            </RegisterButton>
          </Form>
        )}
      </Container>
    </RegisterContainer>
  );
}
