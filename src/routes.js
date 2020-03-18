import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Auth from './Components/Auth'
import Home from './Components/Home'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/authentication/:authType' component={Auth}/>
        <Route path='/home' component={Home}/>
    </Switch>
)