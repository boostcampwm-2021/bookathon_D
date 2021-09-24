import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { formatTime } from '../../utils/formatTime';

const TimerText = styled.span`
  font-size: 160px;
`;

const Timer = ({ timeState }) => {
  return <TimerText>{formatTime(timeState.elapsedTime)}</TimerText>;
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps)(Timer);

