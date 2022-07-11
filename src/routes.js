import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Routes as Switch } from 'react-router-dom'

import Home from './pages/Home'
import Repositories from './pages/Repositories'


export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/repositories' element={<Repositories />} />
      </Switch>
    </BrowserRouter>
  )

}