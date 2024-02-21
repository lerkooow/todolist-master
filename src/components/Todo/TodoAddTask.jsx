import React, { useState } from 'react';

import styled from 'styled-components';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../toolkitRedux/todoSlice';
import { StyledTextField } from '../User/UserSignup';

const StyledList = styled.div`
width: 60%;
  margin-left: 20%;
  margin-top: 40px;

  @media (max-width: 375px) {
      ul {
        padding-left: 20px;
      }
   }
`;

const StyledAddTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonAdd = styled(Button)`
  && {
    background-color: #b47aea;
    border-radius: 15px;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      color: #b47aea;
    }
  }
`;

function TodoAddTask() {
  const [task, setTask] = useState(localStorage.getItem('task') || '');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task) {
      dispatch(addTodo(task));
    }
    setTask('');
    localStorage.removeItem('task');
  };

  return (
    <StyledList>
      <StyledAddTask>
        <StyledTextField
          label="Task"
          id="outlined-start-adornment"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <StyledButtonAdd onClick={handleAddTodo}>Add Task</StyledButtonAdd>
      </StyledAddTask>
    </StyledList>
  );
}

export default TodoAddTask;
