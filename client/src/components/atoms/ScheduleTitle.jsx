import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ScheduleTitleText = styled.span`
  font-size: 20px;
  font-color: black;
`;

const ScheduleTitle = ({ timeState }) => {
  return (
    <ScheduleTitleText>
      {timeState.curTask ? `현재 작업: ${timeState.curTask}` : '현재 작업이 없습니다.'}
    </ScheduleTitleText>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps)(ScheduleTitle);
