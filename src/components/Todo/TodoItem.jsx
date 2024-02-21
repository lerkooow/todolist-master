import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import '@fontsource/roboto/700.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import {
  deleteTask, toggleTodo,
  selectAllTodo,
} from '../../toolkitRedux/todoSlice';
import TodoAddTask from './TodoAddTask';

export const StyledTodoList = styled.div`
  width: 60%;
  margin-left: 20%;
  margin-top: 40px;

  @media (max-width: 375px) {
      ul {
        padding-left: 20px;
      }
   }
`;

const StyledLi = styled.li`
  list-style-type: none;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  text-decoration: ${(props) => (props.ischecked === 'true' ? 'line-through' : 'none')};
  word-break: break-all;
`;

const StyledCheck = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

`;

function TodoItem() {
  const todos = useSelector(selectAllTodo);
  const dispatch = useDispatch();

  const labelProps = { 'aria-label': 'Checkbox demo' };

  const contentToDisplay = todos.map((todo) => (
    <StyleSheetManager key={todo.id} shouldForwardProp={(prop) => prop !== 'ischecked'}>
      <StyledLi key={todo.id} ischecked={todo.checked.toString()}>
        <StyledCheck>
          <Button onClick={() => dispatch(deleteTask(todo.id))}>
            <DeleteOutlinedIcon color="action" />
          </Button>
          <Checkbox
            inputProps={labelProps}
            checked={todo.checked}
            onChange={() => dispatch(toggleTodo(todo.id))}
            color="primary"
          />
          {todo.task}
        </StyledCheck>
      </StyledLi>
    </StyleSheetManager>

  ));

  return (
    <StyledTodoList>
      <TodoAddTask />
      <ul>
        {contentToDisplay}
      </ul>
    </StyledTodoList>
  );
}

export default TodoItem;
