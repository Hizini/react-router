import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import App from '../../App'
import Calculator from '../Calculator/Calculator'
import Comment from '../Comment/comment'
import Home from '../Home/Home'
import Join from '../Join/join'

class RootPage extends Component {
    render() {
        return (
            <>
                <Route exact path='/' component={Home} />
                <Route path='/Calculator' component={Calculator} />
                <Route path='/Comment' component={Comment} />
                <Route path='/Join' component={Join} />
            </>
        )
    }
}

export default RootPage
