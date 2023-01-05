import { withTheme } from 'styled-components';
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as React from 'react';
import { Component } from 'react';

interface Comp17Props {
    theme?: object;
}

interface Comp17State {
    state1: string
}


class Comp17 extends React.Component<Comp17Props, Comp17State> {
    constructor(props: Comp17Props) {
        super(props);
        this.state = { state1: "state1" };
    }

    componentDidMount(): void {
        console.log("Comp17:当前主题: ", this.props.theme);
    }

    render() {

        return (<div>Comp17</div>);
    }
}



const Comp18: React.FC = () => {
    const themeContext = useContext(ThemeContext)

    console.log('Comp18:Current theme: ', themeContext)
    return (<div>Comp18</div>);
}

const Comp19: React.FC = () => {
    const theme = useTheme();
    console.log('Comp19:Current theme: ', theme);
    return (<div>Comp19</div>);
}

const TComp17 = withTheme(Comp17);
export {
    TComp17,
    Comp18,
    Comp19,
};