
import React, { Component } from 'react'
import './Home.scss';

class Home extends Component {
  state = {
    
  }
  // handleClickBtn = () => {
  //   this.props.history.push('/Event', {
  //     hi: 'hello'
  //   })
  // }

  handleClickComment = () => {
    this.props.history.push('/Comment')
  }


  render() {
    return (
      <div className='home-container'>
        <div className='comment-container'>
          <div className='commentBtn' onClick={this.handleClickComment}>
            comment 바로가기
          </div>
        </div>
      </div>
    )
  }
}

export default Home