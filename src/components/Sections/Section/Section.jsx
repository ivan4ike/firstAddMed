import React from 'react'
import s from './Section.module.css'

const Section = (props) => {
    const { img, sectionsName } = props
    return (
        <div className={s.container} key ={sectionsName}>
            <div className={s.section}>
                {img ? <img src={img} /> : <span></span>}
                <span>{sectionsName}</span>
            </div>
        </div>
    )
}


export default Section

