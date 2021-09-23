import React, { useEffect, useState } from 'react';
import Timer from '@atoms/Timer';
import TimerModal from '@molecules/TimerModal';
import ScheduleTitle from '@atoms/ScheduleTitle';
import styled from 'styled-components';
const MiddleBarDiv = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const MiddleBarButton = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 235px;
  height: 60px;
  outline: none;
  border: none;
  color: white;
`;
const TopBarImg = styled.img``;
const MiddleBar = () => {
  return (
    <MiddleBarDiv>
      <ScheduleTitle />
      <Timer />
      <TimerModal />
      <MiddleBarButton>작업선택</MiddleBarButton>
    </MiddleBarDiv>
  );
};
export default MiddleBar;
