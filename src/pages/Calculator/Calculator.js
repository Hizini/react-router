import React, { Component } from 'react';
import './Calculator.scss';
import Display from './Component/Display';
import Nav from '../../nav/nav'

// state 값 초기화
class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: '',
            buffer: []
        }
    }

    //버튼을 누르면 버튼의 string 값을 더해줌 
    onClickButtonHandler = (char) => {
        const settingValue = this.state.displayValue + char
        this.setState({ displayValue: settingValue })
    }

    //누른 버튼 값이 배열 안으로 들어감
    onClickCalculateBtnHandler = (btnType) => {
        let buffer = this.state.buffer // 변수 buffer에 state buffer 배열 선언

        // = 을 누르면 buffer 배열에 displayValue를 넣어주고 calculateBufferValue 함수 실행
        if (btnType === '=') {
            buffer.push(this.state.displayValue)
            this.calculateBufferValue()
            return
        }

        buffer.push(this.state.displayValue) // buffer 배열 안에 displayValue 값을 넣어줌
        buffer.push(btnType) // buffer 배열 안에 btnType 값을 넣어줌
        this.setState({ buffer, displayValue: '' }) // state 값 초기화
    }

    calculateBufferValue = () => {
        const { buffer } = this.state
        let num1, cal, num2, result

        //buffer의 길이만큼 배열을 순회하며 인덱스 별 변수 지정
        buffer.forEach((item, index) => {
            if (index === 0) {
                num1 = item
            }
            if (index === 1) {
                cal = item
            }
            if (index === 2) {
                num2 = item
            }
        })


        // cal의 값에 따라 result 값 설정
        switch (cal) {
            case '+': // 덧셈
                result = Number(num1) + Number(num2)
                break
            case '-': // 뺠샘
                result = Number(num1) - Number(num2)
                break
            case '*': // 곱셈
                result = Number(num1) * Number(num2)
                break
            case '/': // 나눗셈
                result = Number(num1) / Number(num2)
                break
        }

        this.setState({ displayValue: result }) // state 값을 result 값으로 지정
    }

    // 버튼을 눌렀을때 state 값 초기화
    onClickClear = (c) => {
        this.setState({ displayValue: '', buffer: [] })
    }

    handleClickComment = () => {
        this.props.history.push('/Comment')
    }

    render() {
        return (
            <>
            <Nav/>
            <hr/>
            <div className="container">
                <div className='comment-container'>
                    <div className='commentBtn' onClick={this.handleClickComment}>
                        comment 바로가기
                    </div>
                </div>

                <div className="calculator">
                    <Display value={this.state.displayValue}></Display>
                    <div className="keyPadBtn">
                        <button onClick={(e) => this.onClickButtonHandler('7')}>7</button>
                        <button onClick={(e) => this.onClickButtonHandler('8')}>8</button>
                        <button onClick={(e) => this.onClickButtonHandler('9')}>9</button>
                        <button onClick={(e) => this.onClickCalculateBtnHandler('/')}>/</button>
                    </div>
                    <div className="keyPadBtn">
                        <button onClick={(e) => this.onClickButtonHandler('4')}>4</button>
                        <button onClick={(e) => this.onClickButtonHandler('5')}>5</button>
                        <button onClick={(e) => this.onClickButtonHandler('6')}>6</button>
                        <button onClick={(e) => this.onClickCalculateBtnHandler('*')}>X</button>
                    </div>
                    <div className="keyPadBtn">
                        <button onClick={(e) => this.onClickButtonHandler('1')}>1</button>
                        <button onClick={(e) => this.onClickButtonHandler('2')}>2</button>
                        <button onClick={(e) => this.onClickButtonHandler('3')}>3</button>
                        <button onClick={(e) => this.onClickCalculateBtnHandler('+')}>+</button>
                    </div>
                    <div className="keyPadBtn">
                        <button onClick={(e) => this.onClickClear('c')}>C</button>
                        <button onClick={(e) => this.onClickButtonHandler('0')}>0</button>
                        <button onClick={(e) => this.onClickCalculateBtnHandler('=')}>=</button>
                        <button onClick={(e) => this.onClickCalculateBtnHandler('-')}>-</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Calculator;
