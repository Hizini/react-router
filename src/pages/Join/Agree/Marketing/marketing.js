
import React, { Component } from 'react'
import './marketing.scss';

class Marketing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            MarketingEveryChecked: false,
            EmailChecked: false,
            SMSChecked: false,
            AppChecked: false,
        }
    }

    setAllCheckBoxValue = (value) => {
        this.setState({
            MarketingEveryChecked: value,
            EmailChecked: value,
            SMSChecked: value,
            AppChecked: value
        })
    }

    handleMarketingEveryCheck = (e) => {
        const { EveryChecked } = this.props
        this.setState({
            MarketingEveryChecked: !this.state.MarketingEveryChecked,
        })

        if (this.state.MarketingEveryChecked) {
            this.setState({
                EmailChecked: false,
                SMSChecked: false,
                AppChecked: false,
            })
        }
        else if (!EveryChecked) {
            this.setState({
                EmailChecked: true,
                SMSChecked: true,
                AppChecked: true,
            })
        }
    }

    handleEmailCheck = () => {
        this.setState({
            EmailChecked: !this.state.EmailChecked,
        }, () => this.setState({ MarketingEveryChecked: this.checkAllBooleanValue() }))
    }

    handleSMSCheck = () => {
        this.setState({
            SMSChecked: !this.state.SMSChecked,
        }, () => this.setState({ MarketingEveryChecked: this.checkAllBooleanValue() }))
    }

    handleAppCheck = async () => {
        await this.setState({
            AppChecked: !this.state.AppChecked
        })

        this.setState({ MarketingEveryChecked: this.checkAllBooleanValue() })
    }

    checkAllBooleanValue = () => {
        const { EmailChecked, SMSChecked, AppChecked } = this.state 

        return EmailChecked && SMSChecked && AppChecked
    }


    render() {
        return (
            <div className="marketing-container">
                <div className='marketingCheck'>
                    <input className='marketingAgree' onChange={this.handleMarketingEveryCheck} checked={this.state.MarketingEveryChecked} type='checkbox'></input>
                    <span> 마켓팅 수신동의(</span>
                    <input className='marketingEmail' onChange={this.handleEmailCheck} checked={this.state.EmailChecked} type='checkbox'></input>
                    <span>이메일  </span>
                    <input className='marketingSMS' onChange={this.handleSMSCheck} checked={this.state.SMSChecked} type='checkbox'></input>
                    <span>SMS  </span>
                    <input className='marketingApp' onChange={this.handleAppCheck} checked={this.state.AppChecked} type='checkbox'></input>
                    <span>앱Push알림)</span>
                </div>
            </div>
        )
    }
}

export default Marketing