import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Why from '../pages/Why'
import How from '../pages/How'
import Hike from '../pages/Hike'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/why' component={Why} />
                <Route path='/how' component={How} />
                <Route path='/hike' component={Hike} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas