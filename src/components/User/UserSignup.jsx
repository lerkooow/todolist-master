import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import ButtonItem from '../Button/Button';
import { StyledBox } from '../Home/Home';
import Password from '../passwordForm/Password';

export const StyledTypography = styled(Typography)`
  && {
    margin-bottom: 40px;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    max-width: 361px;
    margin-bottom: 29px;
    border-radius: 4px;


  @media (max-width: 375px) {
    width: 90%;
  }
}
`;

export const StyledLink = styled(Link)`
  color: #b47aea;
  margin-bottom: 29px;

  &:hover {
    color: #5f06b3;
  }
`;

function UserSignup() {
  return (
    <StyledBox>
      <StyledTypography variant="h2">Sign Up</StyledTypography>
      <StyledTextField label="name" />
      <StyledTextField label="email" />
      <Password />
      <StyledTextField label="age" />
      <StyledLink to="/login">I already have an account</StyledLink>
      <ButtonItem to="/todo" title="Sign Up" />
    </StyledBox>
  );
}

export default UserSignup;
