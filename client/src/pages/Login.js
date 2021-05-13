import React from 'react'
import { LoginButton } from '../components/LoginButton'

import "./login.scss"

export default function Login() {
    return (
        <div className="login-page">
            <div className="left blur">
              <div className="hero-text">Register here to receive live notifications for Vaccine availability</div>\
              {/* <div className="big-button">LOGIN</div> */}
              <LoginButton className="big-button"/>
            </div>
        </div>
    )
}
