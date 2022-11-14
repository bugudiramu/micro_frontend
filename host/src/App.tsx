import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'remote/Header';

import './index.scss';

const App = () => (
  <div className='text-3xl'>
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
