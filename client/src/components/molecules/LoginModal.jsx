import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const LoginDiv = styled.div`
  position: absolute;
  left: ${window.screen.width - 200}px;
  display: flex;
`;
const LoginOuterDiv = styled.div`
  top: 60px;
  width: 200px;
  height: 100px;
  position: absolute;
  border-radius: 5px;
  background: blue;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;
const LoginButton = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;
const LoginModal = () => {
  const history = useHistory();
  const changeToLoginPage = () => history.push('/login');
  return (
    <LoginDiv>
      <LoginOuterDiv>
        <LoginButton onClick={changeToLoginPage}>로그인</LoginButton>
      </LoginOuterDiv>
    </LoginDiv>
  );
};

export default LoginModal;
