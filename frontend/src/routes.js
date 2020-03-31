import React from 'react';

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Join from './pages/Join/Join'

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/browse' component={Browse} />
            <Route path='/join' component={Join} />
        </Switch>
    </Router>
  );
}
