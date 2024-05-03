import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Login } from './pages/login/Login';
import { Home } from "./pages/home/Home";

export const Content = () => {
    return (
        <Switch>
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/home' component={ Home }/>
        </Switch>
    )
}