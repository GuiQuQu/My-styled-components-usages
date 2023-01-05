import React from "react";
import styled from "styled-components";

interface InputProps {
    inputColor?: string;
}
const Input = styled.input<InputProps>`
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

const Comp7: React.FC = () => (
    <div>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
);

export default Comp7;