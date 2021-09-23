import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScheduleTitleText = styled.text`
  font-size: 20px;
  font-color: black;
`;

const ScheduleTitle = () => {
  return <ScheduleTitleText>현재 작업: 부커톤 프론트엔드 구현</ScheduleTitleText>;
};

export default ScheduleTitle;
