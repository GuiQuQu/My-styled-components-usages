import styled from "styled-components";
import React from "react";

const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
`;


interface IProps {

}
class Form extends React.Component<IProps, {}> {
    private inputRef:React.RefObject<HTMLInputElement>
    
    constructor(props:IProps) {
        super(props);
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    render() {
        return (
            <Input
            ref={this.inputRef}
            placeholder="Hover to focus!"
            onMouseEnter={() => {
              this.inputRef.current?.focus()
            }}
          />
        );
    }
};

export default Form;