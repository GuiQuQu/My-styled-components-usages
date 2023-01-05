import React from "react";
import styled, { createGlobalStyle } from "styled-components";
const Thing = styled.div`
&& {
  color: blue;
}
`

const GlobalStyle = createGlobalStyle`
div${Thing} {
  color: red;
}
`

const Comp10: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Thing>
                I'm blue, da ba dee da ba daa
            </Thing>
        </React.Fragment>);
};

export default Comp10;