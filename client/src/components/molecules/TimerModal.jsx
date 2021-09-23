import React from 'react';
import play from '@img/Timer/play.svg';
import pause from '@img/Timer/pause.svg';
import stop from '@img/Timer/stop.svg';
import styled from 'styled-components';

const TimerModalDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 400px;
`;
const TimerModalImg = styled.img``;

const TimerModal = () => {
  return (
    <TimerModalDiv>
      <TimerModalImg src={play} />
      <TimerModalImg src={pause} />
      <TimerModalImg src={stop} />
    </TimerModalDiv>
  );
};

export default TimerModal;
