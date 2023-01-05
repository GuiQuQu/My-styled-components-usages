// 函数式主题
import styled, { ThemeProvider } from "styled-components";

const Button = styled.button`
color: ${props => props.theme.fg};
border: 2px solid ${props => props.theme.fg};
background: ${props => props.theme.bg};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`;

const theme = {
    fg: "palevioletred",
    bg: "white"
};

// This theme swaps `fg` and `bg`

const invertTheme = ({ fg, bg }: { fg: string, bg: string }) => ({
    fg: bg,
    bg: fg
});

const Comp16: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button>Default Theme</Button>

                <ThemeProvider theme={invertTheme}>
                    <Button>Inverted Theme</Button>
                </ThemeProvider>
            </div>
        </ThemeProvider>);
};

export default Comp16;