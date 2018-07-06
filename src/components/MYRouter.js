import React, { Component } from 'react'
import { BrowserRouter as 
    Router, 
    Switch, 
    Route
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Detail from './Detail';

class MYRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/allpost' component={Post} />
                  <Route path='/post/user/:id/:user' component={Post} />
                  <Route path='/detail/:id' component={Detail} />
                </Switch>
            </Router>    
        )
    }
}

export default MYRouter;