import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    children: ReactNode;
}

// 这里必须要求Link具有className这个属性,
// 因为style-component生成了对应的样式表和随机类名,赋随机类名给相应的组件来实现css的
// 这里我们自定义了一个高级组件,不是基本html元素,不一定一定由className这个属性
//因此我们必须定义出来

const Link: React.FC<Props> = ({ className, children }) => {
    console.log(className); // 对于Link来说  className未定义
    return (
        <a className={className}>
            {children}
        </a>
    );
}
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;


const Comp6: React.FC = () => (
    <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
    </div>
);

export default Comp6;