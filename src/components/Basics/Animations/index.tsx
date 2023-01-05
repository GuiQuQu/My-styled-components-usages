import styled, { keyframes } from "styled-components";
import React from "react";
const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Comp14:React.FC = () => {
    return (<Rotate>&lt; 💅🏾 &gt;</Rotate>);
};

export default Comp14;