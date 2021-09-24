import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CalenderDiv = styled.div`
  position: absolute;
  left: ${window.screen.width - 400}px;
  display: flex;
`;
const CalenderOuterDiv = styled.div`
  top: 60px;
  width: 400px;
  height: 400px;
  position: absolute;
  border-radius: 5px;
  background: blue;
`;

const CalenderModal = () => {
  const firstDate = new Date();
  const lastDate = new Date();
  return (
    <CalenderDiv>
      <CalenderOuterDiv></CalenderOuterDiv>
    </CalenderDiv>
  );
};

export default CalenderModal;
