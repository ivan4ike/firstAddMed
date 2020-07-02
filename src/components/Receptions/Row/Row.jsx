import s from './Row.module.css'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const Row = (props) => {
    const { date, client, status, receiving, claim, diagnosis, time, id, clientView } = props
    return (
        <tr key = {id} className={s.trReceptions} onDoubleClick={() => { clientView(id) }}>
            <td>{time ? `${date} ${time}` : date}</td>
            <td>{client}</td>
            <td>{status ? 'В процессе' : 'Завершён'}</td>
            <td>{receiving}</td>
            <td>{claim}</td>
            <td>{diagnosis}</td>
        </tr>
    )
}

export default Row
