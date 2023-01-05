import React from "react"
import styled from "styled-components"

/**
 * & 表示自己
 * &:hover 对应的伪类选择器 
 * **/
const Thing = styled.div.attrs(
  () => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & { // 自己后面紧跟的自己
    background: lime; // <Thing> next to <Thing>
  }

  &.something { // 具有something类名的自己
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  &.something-else & { // 具有something-else的自己内部的自己,祖先节点关系
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`
const Comp8: React.FC = () => (
  <React.Fragment>
    <Thing>Hello world!</Thing>
    <Thing>How ya doing?</Thing>
    <Thing className="something">The sun is shining...</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Don't you think?</Thing>
    <div className="something-else">
      <Thing>Splendid.</Thing>
    </div>
  </React.Fragment>
);

export default Comp8;