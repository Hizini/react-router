
import React, { Component } from 'react'
import './comment.scss';

import Input from './Input/input';
import List from './List/list';
import i18n from "./i18n/i18n";
class Comment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentData: [],
            isToggle: false,
            value: 'kd'
        }
    }

    getCommentData = (commentValue, nickname, checked) => {
        let date = new Date()
        let commentData = this.state.commentData
        commentData.push({ commentValue, nickname, date, checked })

        this.setState({
            commentData: commentData
        })

    }

    onClickButtonHandler = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
        console.log(this.state.isToggle)
    }

    changeLanguage = (e) => {
        this.setState({
            value : e.target.value
        })
        i18n.changeLanguage(e.target.value)
    }

    render() {
        console.log(this.state.commentData)
        return (
            <div className="comment-container">
                <div className="Comment">
                    <button onClick={this.onClickButtonHandler} className="button">{this.state.isToggle ? `${i18n.t('commentDisable')}`: `${i18n.t('commmentActivation')}`}</button>
                    <select onChange={this.changeLanguage} value={this.state.value} className="Dropbox">
                        <option value="en">American</option>
                        <option value="ko" selected>한국어</option>
                        <option value="jp">日本語</option>
                        <option value="th">ภาษาไทย</option>
                    </select>
                    <div className="List">
                        <List listData={this.state.commentData} />
                        {this.state.isToggle ? <Input inputData={this.getCommentData} /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment