import React from 'react';
import styled from 'styled-components';
import TopBar from '@organisms/TopBar';
import MiddleBar from '@organisms/MiddleBar';
import { testAction } from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MainPage = ({ testAction, timeState }) => {
  const myAction = () => {
    testAction('작업작업작업');
  };
  return (
    <MainDiv>
      <TopBar />
      <p>{timeState.curTask}</p>
      <MiddleBar />
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  testAction,
})(MainPage);
