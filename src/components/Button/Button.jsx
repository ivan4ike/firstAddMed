import React from 'react'
import s from './Button.module.css'

const Button = (props) => {
    return (
        <div className = {s.btn}>
            <span>Выйти</span>
        </div>
    )
}

export default Button
