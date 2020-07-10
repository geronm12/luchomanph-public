import React from 'react';
import {routes} from "./configRouting";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {map} from "lodash";

export default function Routing() {
    return (
        <Router>
        <Switch>
            {map(routes, (route, index) => (
             <Route key={index} path={route.path} exact={route.exact}>
                 <route.page/>
             </Route>    
            ))}
        </Switch>
        </Router>
    )
}
