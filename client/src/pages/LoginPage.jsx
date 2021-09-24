import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  signUpAction,
  loginAction
} from '../actions/actionCreators'
import styled from 'styled-components';
import { useHistory } from 'react-router';

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
  height: 330px;
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
const LoginPwdInputAgain = styled.input`
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
const Navlink = styled.span`
  cursor: pointer;
  color: dodgerblue;

  &:hover{
    color: blue;
  }
`;

const LoginPage = ({
  signUpAction,
  loginAction
}) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: '',
    pwd: '',
    pwdAgain: '',
  });
  const { name, pwd, pwdAgain } = inputs;
  const [isCreate, setIsCreate] = useState(false);
  const onReset = () => {
    setInputs({
      name: '',
      pwd: '',
      pwdAgain: '',
    });
  };
  const login = async () => {
    if (name === '') {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (pwd === '') {
      alert('비밀번호를 입력하세요.');
      return;
    }
    const loginRes = await loginAction({ name, password: pwd });
    if (loginRes === 0) {
      onReset();
      history.push('/');
      return;
    }
  };
  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const createAccount = async () => {
    if (pwd !== '' && pwdAgain !== '' && pwd === pwdAgain && name !== '') {
      const signUpRes = await signUpAction({ name, password: pwd });
      if (signUpRes === 0) {
        onReset();
        history.push('/');
        return;
      }
    }
    if (pwd !== pwdAgain) {
      alert('비밀번호가 일치하지 않습니다.');
    }
    if (name === '') {
      alert('아이디를 입력해주세요.');
    }
    if (pwd === '') {
      alert('비밀번호를 입력하세요.');
    }
    if (pwdAgain === '') {
      alert('한번 더 비밀번호를 입력하세요.');
    }
  };

  const handleLoginOrSignup = () => {
    if (isCreate) {
      createAccount();
      return;
    }
    login();
  }

  const toggleMode = () => {
    onReset();
    setIsCreate(!isCreate);
  }

  // useEffect(() => {}, [isCreate]);
  return (
    <>
      <LoginOuterDiv>
        <LoginInnerDiv>
          아이디
          <LoginIdInput name="name" onChange={onChange} value={name} />
        </LoginInnerDiv>
        <LoginInnerDiv>
          비밀번호
          <LoginPwdInput name="pwd" type="password" onChange={onChange} value={pwd} />
        </LoginInnerDiv>
        {isCreate && (
          <LoginInnerDiv>
            한번 더
            <LoginPwdInputAgain name="pwdAgain" onChange={onChange} value={pwdAgain} />
          </LoginInnerDiv>
        )}
        <LoginSubmitButton
          onClick={handleLoginOrSignup}>
          {isCreate ? '회원가입' : '로그인'}
        </LoginSubmitButton>
        <Navlink onClick={toggleMode}>
          {isCreate ? '로그인' : '회원가입'}
        </Navlink>
        <div>비밀번호는 찾을 수 없습니다. 당근을 주신다면 구현할게요 ㅎㅎ..</div>
      </LoginOuterDiv>
    </>
  );
};

export default connect(null, {
  signUpAction,
  loginAction
})(LoginPage);
