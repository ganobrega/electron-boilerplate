import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => (
  <React.Fragment>
    <App />
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById('root'));

