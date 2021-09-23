import React, { useEffect, useState } from 'react';
import logo from '@img/Logo/logo.svg';
import styled from 'styled-components';
const TopBarDiv = styled.div`
  width: 100vw;
  height: 60px;
  background: #ff8800;
  display: flex;
`;
const TopBarImg = styled.img``;
const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarImg src={logo} />
    </TopBarDiv>
  );
};

export default TopBar;
