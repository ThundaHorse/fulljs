import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(
  // prop txt set
  <App/>,
  document.getElementById('mountNode'),
);

// ReactDOM.render(<App />, document.getElementById('root'));