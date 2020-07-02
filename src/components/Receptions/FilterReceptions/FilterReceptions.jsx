import s from './FilterReceptions.module.css'

import React from 'react'

const FilterReceptions = (props) => {
    const { state,
        clientChange,
        handleSubmit,
        checked } = props
    return (
        <div className={s.content}>
            <input type='date' name='startDate' placeholder='ДД.ММ.ГГГГ' value={state.startDate} onChange={clientChange} />
            <input type='date' name='lastDate' placeholder='ДД.ММ.ГГГГ' value={state.lastDate} onChange={clientChange} />
            <input type='text' name='nameClient' placeholder='Клиент' value={state.nameClient} onChange={clientChange} />
            <input type='checkbox' name='isChecked' className={s.checkboxBtn} onChange={checked} /><span>Только я</span>
            <button className={s.btn} onClick={() => handleSubmit()}>Поиск</button>
        </div>
    )
}


export default FilterReceptions