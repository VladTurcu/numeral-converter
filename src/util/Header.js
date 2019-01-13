import React from 'react';
import styled from 'styled-components';

const Header = (props) => {

  const StyledHeader = styled.header`
    h1 {
      text-align: center;
      width: 100%;
    }
  `;

  return (
    <StyledHeader>
      <h1>
        {props.children}
      </h1>
    </StyledHeader>
  )

}

export default Header;