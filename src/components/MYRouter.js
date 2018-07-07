import React, { Component } from 'react'
import { BrowserRouter as 
    Router, 
    Switch, 
    Route
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import AddPost from './AddPost';
import Detail from './Detail';
import EditPost from './EditPost';
import Album from './Album';
import Photo from './Photo';

class MYRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/allpost' component={Post} />
                  <Route path='/post/add' component={AddPost} />
                  <Route path='/post/user/:id/:user' component={Post} />
                  <Route path='/detail/:id' component={Detail} />
                  <Route path='/edit/post/:id' component={EditPost} />
                  <Route path='/allalbum' component={Album} />
                  <Route path='/album/user/:id/:user' component={Album} />
                  <Route path='/albums/:id/photos' component={Photo} />
                </Switch>
            </Router>    
        )
    }
}

export default MYRouter;