import React from "react";
import styled from "styled-components";



// 为了使用props属性,我们需要在泛型中传入props属性的类型,否则会报错
const Button = styled.button<{ primary?: boolean | undefined }>`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const Comp2: React.FC = () => {
  return (<div>
    <Button >Normal</Button>
    <Button primary >Primary</Button>
  </div>);
}

export default Comp2;