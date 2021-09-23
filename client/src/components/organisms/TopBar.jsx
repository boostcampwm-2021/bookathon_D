import React, { useEffect, useState } from 'react';
import logo from '@img/Logo/logo.svg';
import CalenderModal from '@molecules/CalenderModal';
import styled from 'styled-components';
const TopBarDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 60px;
  background: #ff8800;
  display: flex;
  justify-content: space-between;
`;
const TopBarImg = styled.img`
  margin-left: 10px;
  width: 30px;
`;
const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: black;
  align-self: center;
  margin-right: 10px;
`;
const AddNewTaskBtn = styled.button`
  position: absolute;
  top: 17px;
  right: 20px;
  background: none;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
`;

const TopBar = ({ openAddTaskModal }) => {
  return (
    <TopBarDiv>
      <TopBarImg src={logo} />
      <Profile>ㅇㅇ</Profile>
      <CalenderModal />
      <AddNewTaskBtn onClick={openAddTaskModal}>새 작업 추가</AddNewTaskBtn>
    </TopBarDiv>
  );
};

export default TopBar;
