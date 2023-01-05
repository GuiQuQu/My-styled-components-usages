import styled from "styled-components";
import React from "react";

const clickFn = () => { console.log(`无法使用attr中的props传入自定义内容,props只能写htmlbutton具有的属性`); }

const Button = styled.button.attrs((props) => ({
    display: "block",
    onClick: () => clickFn(), 
}))`
`;

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    size: props.size || "1em",
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

const Comp12: React.FC = () => {
    return (
        <div>
            <Input placeholder="A small text input" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
            <Button>这是按钮</Button>
        </div>
    );
};

export default Comp12;