import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '@fontsource/roboto/500.css';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

import AVATAR from '../../img/Ellipse 1.png';
import { selectAllTodo } from '../../toolkitRedux/todoSlice';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr 2fr 1fr;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledAvatar = styled.img`
  width: 74px;
  height: 74px;
  margin-left: 50px;
  padding-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const StyledTasks = styled.span`
  color: #ef6161;
`;

const StyledTaskDo = styled.div`
  color: #5e5e5e;
  margin: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLogout = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
  padding-right: 10px;
  color: #b47aea;

  &:hover {
    color: #5f06b3;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

function TodoList() {
  const todos = useSelector(selectAllTodo);

  return (
    <>
      <StyledHeader>
        <StyledAvatar src={AVATAR} alt="Avatar" />
        <div>
          <Typography variant="h6">Hello, Lera! 👋🏽</Typography>
          <StyledTasks>
            <Typography variant="h6">
              {todos.length}
              {' '}
              tasks pending
            </Typography>
          </StyledTasks>
        </div>
        <StyledTaskDo>
          <Typography variant="h2">TaskDo</Typography>
        </StyledTaskDo>
        <StyledLogout to="/">
          <Typography variant="h6">Logout</Typography>
        </StyledLogout>
      </StyledHeader>
      <TodoItem />
    </>
  );
}

export default TodoList;
