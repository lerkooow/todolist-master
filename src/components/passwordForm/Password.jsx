import {
  IconButton, InputAdornment, InputLabel, OutlinedInput,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    max-width: 361px;
    margin-bottom: 27px;
    border-radius: 4px;

    @media (max-width: 375px) {
      width: 90%;
    }
  }
`;

function Password() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => e.preventDefault();

  return (
    <StyledFormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )}
        label="Password"
      />
    </StyledFormControl>
  );
}

export default Password;
