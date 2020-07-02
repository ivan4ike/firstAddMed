import React from 'react'
import { connect } from 'react-redux'

const Title = ({title}) => {
    return (
        <div>
            <span>{title}</span>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        title: state.header.title
    }
}


export default connect(mapStateToProps, null)(Title)