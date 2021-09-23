import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTaskAction } from '../../actions/actionCreators';
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

const TaskListItems = styled.ul`
  position: absolute;
  top: 62px;
  z-index: 5;
  background-color: #fff;
  margin: 0;
  padding: 5px;
  list-style-type: none;
  width: 100%;
  box-shadow: 2px 2px 3px #d1d1d1;
  border-radius: 5px;
  border: 1px solid #ececec;
`;

const TaskListItem = styled.li`
  padding: 15px 6px;
  margin: 0 8px;
  cursor: pointer;

  & + li {
    border-top: 1px solid #c5c5c5;
  }

  &:hover {
    background-color: #e5e5e5;
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

const TaskList = ({ timeState, setTaskAction, openAddTaskModal }) => {
  const [shouldShowTaskList, setShouldShowTaskList] = useState(false);

  const toggleTaskList = () => {
    setShouldShowTaskList(!shouldShowTaskList);
  };

  const applyTask = (e) => {
    toggleTaskList();
    setTaskAction(e.target.textContent);
  };

  return (
    <TaskListContainer>
      <ShowTaskDropdownBtn onClick={toggleTaskList} disabled={timeState.curTask}>
        작업 선택
      </ShowTaskDropdownBtn>
      {shouldShowTaskList && (
        <TaskListItems>
          {['작업1', '작업2', '작업3', '작업4'].map((item, idx) => (
            <TaskListItem key={idx} onClick={applyTask}>
              {item}
            </TaskListItem>
          ))}
        </TaskListItems>
      )}
      <AddNewTaskBtn onClick={openAddTaskModal}>새 작업 추가</AddNewTaskBtn>
    </TaskListContainer>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, { setTaskAction })(TaskList);
