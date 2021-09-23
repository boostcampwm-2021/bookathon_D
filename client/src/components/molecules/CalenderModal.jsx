import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
`;
const CalenderOuterDiv = styled.div`
  margin-top: 60px;
  width: 400px;
  height: 400px;
  position: absolute;
  border-radius: 5px;
  background: blue;
`;

const CalenderModal = () => {
  return (
    <Container>
      <CalenderOuterDiv></CalenderOuterDiv>
    </Container>
  );
};

export default CalenderModal;
