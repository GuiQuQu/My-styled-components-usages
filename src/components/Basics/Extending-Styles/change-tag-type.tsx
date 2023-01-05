
// 有时我们希望两者组件底层使用不同的标签,但是外部的样式应该相同
// 比如这在构建导航栏很常见,混合了button标签和a标签,但是两者样式应该相同
// 此时使用 `as`属性很有用
// as 不仅可以修改底层html标签,也可以传入react组件

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Comp4: React.FC = () => {
    return (
        <div>
            <Button>Normal Button</Button>
            <Button as="a" href="#">Link with Button styles</Button>
            <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
        </div>
    );
}

interface Props {
    children: string;
}

function changeChildren(children: string) {
    const splitArr = children.split(" ");
    const newArr = splitArr.filter((value) => value !== "Button");
    return newArr.join(" ");
}

const ActualButton: React.FC<Props> = (props: Props) => (
    <Button {...props} children={changeChildren(props.children)} />
);

const Comp5: React.FC = () => (
    <div>
        <Button>Normal Button</Button>
        <Button as={ActualButton}>Custom Button with Normal Button styles</Button>
    </div>
);


export {
    Comp4,
    Comp5,
};