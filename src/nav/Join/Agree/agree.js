
import React, { Component } from 'react'
import './agree.scss';
import Condition from './Meterial-UI/conditionBtn';
import PersonalBtn1 from './Meterial-UI/personalBtn1';
import PersonalBtn2 from './Meterial-UI/personalBtn2';
import { Button } from "@material-ui/core"
// import Marketing from './Marketing/marketing';

class Agree extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open1: false,
            open2: false,
            open3: false,
        }
    }

    // handleClickOpen() {
    //     const {open1, open2, open3} = this.state
    //     if (open1) {
    //         this.setState({
    //             open1: true,
    //             open2: false,
    //             open3: false
    //         })  
    //     }
    //     if (open2) {
    //         this.setState({
    //             open1: false,
    //             open2: true,
    //             open3: false
    //         })  
    //     }
    //     if (open3) {
    //         this.setState({
    //             open1: false,
    //             open2: false,
    //             open3: true
    //         })  
    //     }

    // }

    handleClickOpen1 = () => this.setState({ open1: true})
    handleClickOpen2 = () => this.setState({ open2: true })
    handleClickOpen3 = () => this.setState({ open3: true })

    handleClose1 = () => this.setState({ open1: false })
    handleClose2 = () => this.setState({ open2: false })
    handleClose3 = () => this.setState({ open3: false })

    render() {
        const { EveryChecked, conditionChecked, personalChecked, personalChecked2, MarketingEveryChecked, EmailChecked, SMSChecked, AppChecked } = this.props
        const { handleOnChangeCheckBox, handleOnChangeMarketingCheckBox, handleEveryCheck, handleMarketingEveryCheck } = this.props
        return (
            <div className="agree-container">
                <div className="allCheck"> 전체동의
                    <input className="everyCheck" onChange={handleEveryCheck} checked={EveryChecked} value='EveryChecked' type='checkbox'></input> <hr />
                </div>
                <div className='personalInfo'>
                    <div className='personalCheck1'>
                        <input className='personalInput1' onChange={handleOnChangeCheckBox} checked={conditionChecked} value='conditionChecked' type='checkbox'></input>
                        <span> 이용약관  </span>
                        {/* <button className='personalBtn1'>내용보기</button> */}
                        {/* <div className='conditionBtn'><Condition/></div> */}
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen1}>내용보기</Button>
                    </div>
                    <div className='personalCheck2'>
                        <input className='personalInput2' onChange={handleOnChangeCheckBox} checked={personalChecked} value='personalChecked' type='checkbox'></input>
                        <span> 개인정보 수집 및 이용 안내  </span>
                        {/* <button className='personalBtn2'>내용보기</button> */}
                        {/* <div className="personalBtn1"><PersonalBtn1/></div> */}
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen2}>내용보기</Button>
                    </div>
                    <div className='personalCheck3'>
                        <input className='personalInput3' onChange={handleOnChangeCheckBox} checked={personalChecked2} value='personalChecked2' type='checkbox'></input>
                        <span> 개인정보 처리위탁  </span>
                        {/* <button className='personalBtn3'>내용보기</button> */}
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen3}>내용보기</Button>
                    </div>
                    <div className="marketing-container">
                        <div className='marketingCheck'>
                            <input className='marketingAgree' onChange={handleMarketingEveryCheck} checked={MarketingEveryChecked} value='MarketingEveryChecked' type='checkbox'></input>
                            <span> 마켓팅 수신동의(</span>
                            <input className='marketingEmail' onChange={handleOnChangeMarketingCheckBox} checked={EmailChecked} value='EmailChecked' type='checkbox'></input>
                            <span>이메일  </span>
                            <input className='marketingSMS' onChange={handleOnChangeMarketingCheckBox} checked={SMSChecked} value='SMSChecked' type='checkbox'></input>
                            <span>SMS  </span>
                            <input className='marketingApp' onChange={handleOnChangeMarketingCheckBox} checked={AppChecked} value='AppChecked' type='checkbox'></input>
                            <span>앱Push알림)</span>
                        </div>
                    </div>
                </div>
                {/* <Marketing ref={this.child} EveryChecked={this.state.EveryChecked} /> */}
                <Condition open={this.state.open1} handleClose={this.handleClose1} />
                <PersonalBtn1 open={this.state.open2} handleClose={this.handleClose2} />
                <PersonalBtn2 open={this.state.open3} handleClose={this.handleClose3} />
            </div>
        )
    }
}

export default Agree