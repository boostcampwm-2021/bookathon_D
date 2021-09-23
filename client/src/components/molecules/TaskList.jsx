import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TaskListContainer = styled.div`
  position: relative;
  width: 550px;
  display: flex;
  justify-content: space-between;
`;

const ShowTaskDropdownBtn = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 235px;
  height: 60px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #e5e5e5;
    cursor: not-allowed;
  }
`;

const AddNewTaskBtn = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 235px;
  height: 60px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const TaskList = ({
  timeState,
  openAddTaskModal,
  openSelectTaskModal
}) => {


  return (
    <TaskListContainer>
      <ShowTaskDropdownBtn
        onClick={openSelectTaskModal}
        disabled={timeState.curTask && timeState.curTimerState !== 'stopped'}
      >
        작업 선택
      </ShowTaskDropdownBtn>
      <AddNewTaskBtn onClick={openAddTaskModal}>새 작업 추가</AddNewTaskBtn>
    </TaskListContainer>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps)(TaskList);
