import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addANewTaskAction } from '../../actions/actionCreators';
import CloseIcon from '../atoms/closeIcon';
const ScheduleTitleModalDiv = styled.div`
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
  width: 500px;
  height: 300px;
  align-items: center;
`;

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

const Background = styled.div`
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`;
const ModalTitle = styled.small`
  font-size: 18px;
`;

const ModalInput = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #23262d;
  border-radius: 5px;
  width: 300px;
`;

const ModalButton = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const ScheduleTitleModal = ({ addANewTaskAction, closeAddTaskModal }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const handleNewTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const addANewTask = () => {
    addANewTaskAction({ task: newTaskName });
    closeAddTaskModal();
  };
  return (
    <>
      <Background />
      <ScheduleTitleModalDiv>
        <CloseBtn onClick={closeAddTaskModal}>
          <CloseIcon />
        </CloseBtn>
        <ModalTitle>추가할 작업을 입력해주세요.</ModalTitle>
        <ModalInput type="text" value={newTaskName} onChange={handleNewTaskNameChange} />
        <ModalButton onClick={addANewTask}>새 작업 추가</ModalButton>
      </ScheduleTitleModalDiv>
    </>
  );
};
const mapStateToProps = (state) => ({
  timeState: state.timeState,
});
export default connect(mapStateToProps, {
  addANewTaskAction,
})(ScheduleTitleModal);
