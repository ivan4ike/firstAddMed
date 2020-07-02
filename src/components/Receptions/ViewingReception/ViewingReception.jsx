import React from 'react'
import s from './ViewingReception.module.css'

export default function ViewingReception(props) {
    const { client } = props
    console.log(client)
    return (
        <div className={s.container}>
            <div className={s.line}>
                <span>Просмотр приёма</span>
            </div>
            <table>
                <tbody className={s.inform}>
                    <tr>
                        <td>Клиент</td>
                        <td>{client.client}</td>
                        <td>Дата</td>
                        <td>{client.date}</td>
                    </tr>
                    <tr>
                        <td>Принимающий</td>
                        <td>{client.receiving}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className={s.otherInaorm}>
                <h3>Остальная информация по приёму</h3>
            </div>
            <div className={s.line2}>
                <button className={s.btnForm} onClick={() => { props.closeFormViewing() }}>Закрыть</button>
            </div>
        </div >
    )
}
