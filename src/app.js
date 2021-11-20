import React from 'react'
import {BrowserRouter ,Switch, Route } from 'react-router-dom'
import Theater from './component/theater'
import Book from './component/book'
import Home from './component/home'
import Pay from './component/pay'
import Nav from './component/nav'
import Admin from './component/admin'
const app = () => {
    return (
        
        <BrowserRouter>
        <Nav/>
        <Switch>
        
        <Route exact path='/' component={Home}/>
         
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/book/theater/:id' component={Theater}/>

        <Route exact path='/book/:id' component={Book}/>
        <Route exact path='/book/theater/:id/pay' component={Pay}/>
       
        </Switch>
     </BrowserRouter>
      
        
    )
}

export default app


