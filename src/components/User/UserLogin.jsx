import React from 'react';

import '@fontsource/roboto/700.css';

import { StyledLink, StyledTextField, StyledTypography } from './UserSignup';

import ButtonItem from '../Button/Button';
import { StyledBox } from '../Home/Home';
import Password from '../passwordForm/Password';

function UserLogin() {
  return (
    <StyledBox>
      <StyledTypography variant="h2">Log In</StyledTypography>
      <StyledTextField label="email" id="outlined-start-adornment" />
      <Password />
      <StyledLink to="/signup">I don&apos;t have an account</StyledLink>
      <ButtonItem to="/todo" title="Log In" />
    </StyledBox>
  );
}

export default UserLogin;
