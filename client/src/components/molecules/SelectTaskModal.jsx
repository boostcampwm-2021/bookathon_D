import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setTaskAction } from '../../actions/actionCreators';
import CloseIcon from '../atoms/CloseIcon';

const Background = styled.div`
  position: fixed;
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`;

const SelectTaskModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ffffff;
  margin: -250px 0 0 -250px;
  border-radius: 5px;
  width: 550px;
  height: 350px;
  align-items: center;
`;

const SelectTaskModalHeader = styled.header`
  position: absolute;
  top: 15px;
`

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;

  & svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: #d1d1d1;
  }
`;

const TaskListItems = styled.ul`
  position: absolute;
  top: 62px;
  background-color: #fff;
  margin: 0;
  padding: 5px;
  list-style-type: none;
  width: 100%;
  max-height: 286px;
  overflow: auto;
  box-sizing: border-box;
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

const SelectTaskModal = ({
  timeState,
  setTaskAction,
  closeSelectTaskModal
}) => {
  const applyTask = (e) => {
    closeSelectTaskModal();
    setTaskAction(e.target.textContent);
  };

  return (
    <>
      <Background />
      <SelectTaskModalContainer>
        <SelectTaskModalHeader>작업을 선택해 주세요.</SelectTaskModalHeader>
        <CloseBtn onClick={closeSelectTaskModal}>
          <CloseIcon />
        </CloseBtn>
        <TaskListItems>
          {timeState.tasks.map((item, idx) => (
            <TaskListItem key={idx} onClick={applyTask}>
              {item}
            </TaskListItem>
          ))}
        </TaskListItems>
      </SelectTaskModalContainer>
    </>
  )
}

const mapStateToProps = (state) => ({
  timeState: state.timeState
});

export default connect(mapStateToProps, { setTaskAction })(SelectTaskModal);
