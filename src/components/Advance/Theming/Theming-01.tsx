// 主题和默认主题

import styled, { ThemeProvider } from "styled-components";
import React from "react";
interface ITheme {
    main: string;
}

const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;

/* Color the border and text with theme.main */
color: ${props => props.theme.main};
border: 2px solid ${props => props.theme.main};
`;

// 定义默认主题
Button.defaultProps = {
    theme: {
        main: "palevioletred"
    }
}

// 自己定义主题,并且使用ThemeProvider传递进去
const theme:ITheme = {
    main: "mediumseagreen"
}

const Comp15: React.FC = () => {
    return (
        <div>
            <Button>Normal</Button>
            <ThemeProvider theme={theme}>
                <Button>Themed</Button>
            </ThemeProvider>
        </div>);
};

export default Comp15;

