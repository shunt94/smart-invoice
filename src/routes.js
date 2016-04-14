import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// Views
import Home from './views/Home'
import App from './views/App'
import NoMatch from './views/NoMatch'


class Routing extends React.Component {
    handleOnRoute() {

    }
    render() {
        return (
            <Router onUpdate={this.handleOnRoute} history={browserHistory}>
                <Route path='/' component={App}>
                    // Routes Go here
                    <IndexRoute component={Home} />
                    <Route path='/' component={Home}/>

                    // Routes go before no match (404)
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        );
    }
}

export default Routing