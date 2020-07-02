import React from 'react'
import { connect } from 'react-redux'

const FIO = ({name}) => {
    return (
        <div>
            {name}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        name: state.header.name
    }
}


export default connect(mapStateToProps)(FIO)