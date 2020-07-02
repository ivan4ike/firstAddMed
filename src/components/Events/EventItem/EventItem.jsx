import React from 'react'
import s from './EventItem.module.css'

export default function EventItem(props) {
    const { headline, date, description, img_preview } = { ...props.event }
    const {closeEvent} = props
    return (
        <div className={s.container}>
            <div className = {s.close} onClick = {() => {closeEvent()}}>X</div>
            <h2 className={s.headline}>{headline}</h2>
            <p>{description}</p>
            <img className={s.photoCart} src={img_preview} alt='' />
            <span>{date}</span>
        </div>
    )
}
