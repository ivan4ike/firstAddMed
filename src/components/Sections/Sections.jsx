import React from 'react'
import { connect } from 'react-redux'
import s from './Sections.module.css'
import Section from './Section/Section'
import { Link, withRouter } from 'react-router-dom'

const Sections = ({ sections }) => {
    return (
        <div className={s.sections}>
            {sections.sections.map((item, id) => {
                return <Link to={`${item.url}`} key={id}><Section img={item.img} sectionsName={item.sectionsName} /> </Link>
            })}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sections: state.sections
    }
}

export default withRouter(connect(mapStateToProps, null)(Sections))