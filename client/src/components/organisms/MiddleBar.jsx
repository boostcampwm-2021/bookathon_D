import React, { useEffect, useState } from 'react';
import Timer from '@atoms/Timer';
import TimerModal from '@molecules/TimerModal';
import ScheduleTitle from '@atoms/ScheduleTitle';
import TaskList from '../molecules/TaskList';
import styled from 'styled-components';
const MiddleBarDiv = styled.div`
  margin-top: 40px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;


const MiddleBar = () => {
  return (
    <MiddleBarDiv>
      <ScheduleTitle />
      <Timer />
      <TimerModal />
      <TaskList />
    </MiddleBarDiv>
  );
};
export default MiddleBar;
