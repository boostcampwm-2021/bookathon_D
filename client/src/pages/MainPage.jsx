import React from 'react';
import styled from 'styled-components';
import TopBar from '@organisms/TopBar';
import { testAction } from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const MainPage = ({ testAction, timeState }) => {
  const myAction = () => {
    testAction('작업작업작업');
  };
  return (
    <MainDiv>
      <TopBar></TopBar>
      <p>{timeState.curTask}</p>
      <label>안녕</label>
      <button onClick={myAction}>작업변경</button>
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  testAction,
})(MainPage);
