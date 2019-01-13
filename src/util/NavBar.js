import React from 'react';
import styled from 'styled-components';

const NavBar = ({ options, active, changeActiveInput }) => {
  const StyledNavBar = styled.nav`
    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      padding: 0;
    }
  `;

  const StyledNavListItem = styled.li`
    align-items: center;
    background-color: ${props => props.active ? 'orange' : 'white'};
    border: 2px solid black;
    cursor: pointer;
    display: inline-flex;
    height: 45px;
    justify-content: center;
    width: 45%;
  `;

  return (
    <StyledNavBar>
      <ul>
        {options.map((opt, i) => (
          <StyledNavListItem
            active={active === opt}
            id={opt}
            key={opt}
            onClick={changeActiveInput}
          >
            Enter {opt}
          </StyledNavListItem>
        ))}
      </ul>
    </StyledNavBar>
  );
}

export default NavBar;