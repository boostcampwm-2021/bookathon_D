import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerText = styled.text`
  font-size: 6px;
  width: 525px;
  height: 160px;
  font-color: black;
`;

const Timer = () => {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
  }, [Time]);

  return <TimerText>{`${Time.getHours()}:${Time.getMinutes()}:${Time.getSeconds()}`}</TimerText>;
};

export default Timer;
