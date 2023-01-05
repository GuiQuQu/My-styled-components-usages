import styled from "styled-components";
import React from "react";

// Static object
const Box = styled.div({
    background: 'palevioletred',
    height: '50px',
    width: '50px'
});

// Adapting based on props
const PropsBox = styled.div<{ background: string }>(props => ({
    background: props.background,
    height: '50px',
    width: '50px'
}));

const Comp21: React.FC = () => {
    return (<div>
        <Box />
        <PropsBox background="blue" />
    </div>);
}

export default Comp21;
