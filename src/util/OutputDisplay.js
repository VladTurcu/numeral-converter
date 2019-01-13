import React from 'react';
import styled from 'styled-components';

const OutputDisplay = (props) => {

  const StyledDiv = styled.div`
    display: block;
    height: 80px;
    text-align: center;
    width: 100%;
    h2 {
      font-size: 40px;
    }
  `;

  return (
    <StyledDiv>
      <h2>
        {props.children}
      </h2>
    </StyledDiv>
  )

}

export default OutputDisplay;