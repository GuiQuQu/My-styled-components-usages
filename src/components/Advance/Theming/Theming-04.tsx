import styled, { ThemeProvider } from "styled-components";
import * as React from 'react';

// Define our button
const Button = styled.button<{ r?: number }>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: ${props => props.r || 3}px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// Define what main theme will look like
const theme = {
    main: "mediumseagreen"
};

const Comp20: React.FC = () => {
    return (
        <div>
            <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
            <ThemeProvider theme={theme}>
                <div>
                    <Button>Themed</Button>
                    <Button r={20} theme={{ main: "darkorange" }}>Overridden</Button>
                </div>
            </ThemeProvider>
        </div>);
}

export default Comp20;