import React from 'react';

import TitleBar from './components/TitleBar';

import { GlobalStyle } from './styles/global';

const App = () => (
  <React.Fragment>
    <GlobalStyle/>
    <TitleBar/>
    <h1>Hello World</h1>
  </React.Fragment>
);

export default App;
