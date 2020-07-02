import React from 'react'
import s from './Events.module.css'

export default function Events(props) {
    const { id, img_preview, headline, date, description, openEvent } = props
    return (
        <div className={s.column} onClick={() => openEvent(id)}>
            <span >
                <img className={s.img_preview} src={img_preview} alt="" />
            </span>
            <span className={s.headline}>{headline} </span>
            <span className={s.date}>{date}</span>
            <span className={s.description}>{description}</span>
        </div>
    )
}
