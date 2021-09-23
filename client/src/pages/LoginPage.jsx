import React, { useState } from 'react';
import styled from 'styled-components';

const LoginOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ffffff;
  margin: -250px 0 0 -250px;
  border: 1px solid #23262d;
  border-radius: 5px;
  width: 500px;
  height: 300px;
  align-items: center;
`;
const LoginInnerDiv = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LoginIdInput = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #23262d;
  border-radius: 5px;
  width: 300px;
`;
const LoginPwdInput = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #23262d;
  border-radius: 5px;
  width: 300px;
`;
const LoginSubmitButton = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;
const LoginCreateButton = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const LoginPage = () => {
  const getLogin = () => {};
  return (
    <>
      <LoginOuterDiv>
        <LoginInnerDiv>
          아이디
          <LoginIdInput />
        </LoginInnerDiv>
        <LoginInnerDiv>
          비밀번호
          <LoginPwdInput type="password" />
        </LoginInnerDiv>

        <LoginSubmitButton onClick={getLogin}>로그인</LoginSubmitButton>
        <LoginCreateButton>회원가입</LoginCreateButton>
      </LoginOuterDiv>
    </>
  );
};

export default LoginPage;
