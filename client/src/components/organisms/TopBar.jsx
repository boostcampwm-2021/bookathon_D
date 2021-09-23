import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TopBar = () => {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
  }, [Time]);

  return <TimerText>{`${Time.getHours()}:${Time.getMinutes()}:${Time.getSeconds()}`}</TimerText>;
};

export default TopBar;
