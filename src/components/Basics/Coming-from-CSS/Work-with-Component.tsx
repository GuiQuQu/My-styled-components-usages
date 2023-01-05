import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  background: papayawhip;
`;
const Paragraph = styled.p`
  font-size: 1.5rem;
`;
const Button = styled.button`
  color: palevioletred;
`;


export default class Counter extends React.Component {
    state = { count: 0 };

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });

    render() {
        return (
            <StyledCounter>
                <Paragraph>{this.state.count}</Paragraph>
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
            </StyledCounter>
        );
    }
};