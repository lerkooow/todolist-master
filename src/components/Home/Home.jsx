import React from 'react';
import styled from 'styled-components';

import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ButtonItem from '../Button/Button';

export const StyledBox = styled(Box)`
  display: grid;
  color: #5e5e5e;
  justify-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const StylesTypography = styled(Typography)`
  text-align: center;
`;

function Home() {
  return (
    <StyledBox>
      <Typography variant="h2">TaskDo</Typography>
      <StylesTypography variant="h6" gutterBottom>
        Manage You Task Checklist Easily
      </StylesTypography>
      <ButtonItem title="Lets Start" to="/signup" />
    </StyledBox>
  );
}

export default Home;
