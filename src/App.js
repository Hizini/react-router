import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Nav from './nav/nav'
import Calculator from './nav/Calculator/Calculator'
import Comment from './nav/Comment/comment'
import Join from './nav/Join/join'
import Home from './nav/Home/Home'
import Footer from './footer/footer'
class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <hr/>
                <Route exact path='/' component={Home}/>
                <Route path='/Calculator' component={Calculator}/>
                <Route path='/Comment' component={Comment}/>
                <Route path='/Join' component={Join}/>
                <hr/>
                <Footer/>
            </div>
        )
    }
}

export default App