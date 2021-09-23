import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const LoginDiv = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;
const LoginOuterDiv = styled.div`
  top: 2px;
  right: 0;
  width: 200px;
  height: 100px;
  position: absolute;
  border: 1px solid #ff8800;
  border-radius: 5px;
  background-color: #ff8800;
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
