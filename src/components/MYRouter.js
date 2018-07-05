import React, { Component } from 'react'
import { BrowserRouter as 
    Router, 
    Switch, 
    Route
} from 'react-router-dom';

import Home from './Home';

class MYRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                  <Route exact path='/' component={Home} />
                  {/* <Route path='/:slug' component={Detail} /> */}
                </Switch>
            </Router>    
        )
    }
}

export default MYRouter;