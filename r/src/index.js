import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AvtarList from './AvtarList'
import Demo from './Demo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     {/* <h1> Hello React </h1> */}
     <AvtarList/>,


  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
