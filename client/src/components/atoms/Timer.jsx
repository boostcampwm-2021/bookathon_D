import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { formatTime } from '../../utils/formatTime';

const TimerText = styled.text`
  font-size: 80px;
  font-color: black;
`;

const Timer = ({ timeState }) => {
  return <TimerText>{formatTime(timeState.elapsedTime)}</TimerText>;
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps)(Timer);

