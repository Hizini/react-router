import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import Nav from './nav/nav'
// import Calculator from './pages/Calculator/Calculator'
// import Comment from './pages/Comment/comment'
// import Join from './pages/Join/join'
// import Home from './pages/Home/Home'
import Footer from './footer/footer'
import Root from './pages/Root/Root'
class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <hr/>
                {/* <Route exact path='/' component={Home}/>
                <Route path='/Calculator' component={Calculator}/>
                <Route path='/Comment' component={Comment}/>
                <Route path='/Join' component={Join}/> */}
                <Root/>
                <hr/>
                <Footer/>
            </div>
        )
    }
}

export default App