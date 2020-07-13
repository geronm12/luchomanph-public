import React from 'react';
import {routes} from "./configRouting";
import {BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"
import {map} from "lodash";
 
export default function Routing() {
    
     return (
        <Router>
           <Rooting/>
        </Router>
    )
}


function Rooting (){

    const location = useLocation();
   
    return (
       <AnimatePresence>
      <Switch location={location}> 
        {map(routes, (route, index) => (
         <Route key={index} path={route.path} exact={route.exact}>
             <route.page/>
         </Route>    
        ))}
    </Switch> 
    </AnimatePresence>
  );
}