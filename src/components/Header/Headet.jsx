import React, { Component } from 'react'
import s from './Header.module.css'

import homeImg from '../../images/house.svg'
import Title from './Title/Title'
import FIO from './FIO/FIO'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { authentication } from '../../redux/headerReducer'

class Header extends Component {


    render() {
        console.log(this.props)
        return (
            <div className={s.header}>
                <div className={s.title}>
                    <Link to='/'><img src={homeImg} className={s.icon} /></Link>
                    <Title />
                </div>
                <div className={s.inform}>
                    <FIO />
        <Link to='/login'><button onClick = {()=>{this.props.authentication()}} >{this.props.header.btn}</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        authentication : () =>{
            dispatch(authentication())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
