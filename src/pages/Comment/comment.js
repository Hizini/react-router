
import React, { Component } from 'react'
import './comment.scss';

import Input from './Input/input';
import List from './List/list';
import i18n from "./i18n/i18n";
import axios from "axios";
class Comment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentData: [],
            isToggle: false,
            value: ''
        }
    }

    componentDidMount() {
        this.getCommentData()
        const token = localStorage.getItem('token')
        if(!token) {
          alert ('로그인이 필요한 서비스입니다.')
          this.props.history.push('/SignIn')
        }
        else {this.props.history.push('/Comment')}
    }

    inputData = (commentValue, nickname, checked) => {
        const body = { nickname: checked ? '익명' : nickname, commentValue }

      
        // let commentData = this.state.commentData
        // commentData.push({ commentValue, nickname, date, checked })

        // this.setState({
        //     commentData: commentData
        // })
        
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` }} 
        
        axios.post('http://localhost:2008/api/comment', body, config)
            .then(this.getCommentData())
            .catch(error => {
                console.log(error)
                alert('Unknow Error!!')
            })
    }


    getCommentData = () => {
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` }} 

        axios.get('http://localhost:2008/api/comment', config)
            .then(response => {
                console.log(response)
                this.setState({
                    commentData: response.data.list
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    onClickButtonHandler = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    changeLanguage = (e) => {
        this.setState({
            value: e.target.value
        })
        i18n.changeLanguage(e.target.value)
    }

    render() {
        return (
            <div className="comment-container">
                <div className="Comment">
                    <button onClick={this.onClickButtonHandler} className="button">{this.state.isToggle ? `${i18n.t('commentDisable')}` : `${i18n.t('commmentActivation')}`}</button>
                    <select onChange={this.changeLanguage} value={this.state.value} className="Dropbox">
                        <option value="en">American</option>
                        <option value="ko" selected>한국어</option>
                        <option value="jp">日本語</option>
                        <option value="th">ภาษาไทย</option>
                    </select>
                    <div className="List">
                        <List listData={this.state.commentData} />
                        {this.state.isToggle ? <Input inputData={this.inputData} /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment