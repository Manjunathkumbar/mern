import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./core/Home"
import signup from "./user/Signup";
import signin from "./user/Signin";


const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={signup} />
            <Route path="/signin" exact component={signin} />
        </Switch>
        </BrowserRouter>
    )
}


export default Routes;