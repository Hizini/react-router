
import React, { Component } from 'react'
import './Home.scss'
import Nav from '../../nav/nav'

class Home extends Component {

  // Event로 이동하면서 state 값 전달
  // handleClickBtn = () => {
  //   this.props.history.push('/Event', {
  //     hi: 'hello'
  //   })
  // }


  // Comment로 이동
  handleClickComment = () => {
    this.props.history.push('/Comment')
  }


  render() {
    return (
      <>
      <Nav/>
      <hr/>
      <div className='home-container'>
        <div className='comment-container'>
          <div className='commentBtn' onClick={this.handleClickComment}>
            comment 바로가기
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home