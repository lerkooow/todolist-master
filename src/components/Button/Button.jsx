import React from 'react';
import PropTypes from 'prop-types'; // ES6

import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
  && {
    background-color: #b47aea;
    border-radius: 15px;

    &:hover {
      background-color: #ffffff;
      color: #b47aea;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function ButtonItem({ title, to }) {
  return (
    <StyledButton variant="contained">
      <StyledLink to={to}>{title}</StyledLink>
    </StyledButton>
  );
}

ButtonItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default ButtonItem;
