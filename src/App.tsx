import React from 'react';
import { ThemeProvider } from 'styled-components';
import Comp1 from './components/Basics/GettingStarted';
import Comp2 from './components/Basics/Adapting-based-on-props';
import { Comp3, Comp4, Comp5 } from "./components/Basics/Extending-Styles";
import Comp6 from './components/Basics/Styling-Any-Component';
import Comp7 from './components/Basics/Passed-props';
import { Counter, Comp8, Comp9, Comp10, Comp11 } from './components/Basics/Coming-from-CSS';
import { Comp12, Comp13 } from './components/Basics/Attaching-additional-props';
import Comp14 from './components/Basics/Animations';
import { Comp15, Comp16, Comp17, Comp18,Comp19,Comp20 } from './components/Advance/Theming';
import Form from './components/Advance/Refs';
import Comp21 from './components/Advance/Style-Objects';
function App() {
  return (
    <div>
      <hr />
      <Comp1 />
      <hr />
      <Comp2 />
      <hr />
      <Comp3 />
      <hr />
      <Comp4 />
      <hr />
      <Comp5 />
      <hr />
      <Comp6 />
      <hr />
      <Comp7 />
      <hr />
      <Counter />
      <hr />
      <Comp8 />
      <hr />
      <Comp9 />
      <hr />
      <Comp10 />
      <hr />
      <Comp11 />
      <hr />
      <Comp12 />
      <hr />
      <Comp13 />
      <hr />
      <Comp14 />
      <hr />
      <Comp15 />
      <hr />
      <Comp16 />
      <hr />
      <ThemeProvider theme={{ name: "comp17", color: "red", bg: "blue" }}>
        <Comp17 />
      </ThemeProvider>
      <hr />
      <ThemeProvider theme={{ name: "comp18", color: "red", bg: "blue" }}>
        <Comp18 />
      </ThemeProvider>
      <hr />
      <ThemeProvider theme={{ name: "comp19", color: "red", bg: "blue" }}>
        <Comp19 />
      </ThemeProvider>
      <hr />
      <Comp20 />
      <hr />
      <Form />
      <hr />
      <Comp21 />
    </div>
  );
}

export default App;
