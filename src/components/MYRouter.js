import React, { Component } from 'react'
import { BrowserRouter as 
    Router, 
    Switch, 
    Route
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';

class MYRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/post/user/:id' component={Post} />
                </Switch>
            </Router>    
        )
    }
}

export default MYRouter;