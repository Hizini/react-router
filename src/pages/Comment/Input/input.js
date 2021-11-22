import React, { Component } from 'react'
import './input.scss';
import i18n from "./../i18n/i18n";

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            nickname: '',
            checked: false,
        }
    }

    // commentName = ''
    // componentDidMount() {
    //     const { commentName } = this.props
    //     this.setState({
    //         nickname: commentName
    //     })
    // }

    componentDidUpdate(prvProps, prvState) {
        const { commentName } = this.props

        if (prvProps.commentName !== commentName) {
            this.setState({
                nickname: commentName
            })
        }
    }

    onInputValueHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onInputNicknameHandler = (e) => {
        this.setState({
            nickname: e.target.value
        })

    }

    onButtonHandler = () => {
        const { inputData } = this.props
        if (this.state.value === '') {
            alert("댓글을 입력해주세요!")
        }
        if (this.state.nickname === '') {
            alert("닉네임을 입력해주세요!")
        }
        if (this.state.value && this.state.nickname !== '') {
            inputData(this.state.value, this.state.nickname, this.state.checked)
        }
    }

    onCheckedHandler = () => {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {
        // console.log(this.state.value, this.state.nickname, this.state.checked)
        // console.log(i18n.t('Anonymous'))
        const token = localStorage.getItem('token')
        return (
            <>
                <div className="">
                    <input className="comment" onChange={this.onInputValueHandler} type='text' value={this.state.value} placeholder={i18n.t('comment')}></input>
                    <input className="nickname" onChange={!token && this.onInputNicknameHandler} type='text' value={this.state.nickname} placeholder={i18n.t('nickname')}></input>
                    <button className="input" onClick={this.onButtonHandler}>{i18n.t('Input')}</button>
                    <div>{i18n.t('Anonymous')}
                        <input className="Anonymous" onChange={this.onCheckedHandler} type='checkbox' value={this.state.checked}></input>
                    </div>
                </div>
            </>
        )
    }
}

export default Input