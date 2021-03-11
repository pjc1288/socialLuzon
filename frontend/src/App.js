import React from 'react'

import { GlobalStyle } from './globalStyles';
import { Navbar } from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
    <Navbar />
{/*     <Switch></Switch> */}


    </Router>
  );
}

export default App;
