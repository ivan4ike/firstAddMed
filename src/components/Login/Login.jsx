import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { loginAC } from '../../redux/action.js'

import s from './Login.module.css'
import { useHistory, withRouter } from 'react-router-dom'

const Login = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const changeLogin = (e) => {
        setLogin(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const log = () => {
        props.loginAC(login, password)
    }


    return (
        <div className={s.login}>
            <label>Логин</label>
            <input type='login' name='login' value={login} onChange={changeLogin} />
            <label>Пароль</label>
            <input type='password' name='password' value={password} onChange={changePassword} />
            <button type='btn' className={s.btn} onClick={log}>Войти</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginAC: (login, password) => {
            dispatch(loginAC(login, password))
        }
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
