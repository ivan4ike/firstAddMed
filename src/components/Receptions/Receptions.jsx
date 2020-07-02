import React, { Component } from 'react'
import { connect } from 'react-redux'

import s from './Receptions.module.css'
import Row from './Row/Row'
import FilterReceptions from './FilterReceptions/FilterReceptions'

import { receptionss, filterDate, receptionsMi, filterName } from '../../redux/action'
import ViewingReception from './ViewingReception/ViewingReception'

class Receptions extends Component {
    constructor(props) {
        super(props)
        this.state = {nameClient: ''};
        this.clientChange = this.clientChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checked = this.checked.bind(this);
        this.clientView = this.clientView.bind(this);
        this.closeFormViewing = this.closeFormViewing.bind(this);
    }

    clientChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        if (this.state.nameClient) {
            return this.props.filterName(this.state.nameClient)
        } else if (this.state.startDate && this.state.lastDate) {
            return this.props.filterDate({ startDate: this.state.startDate, lastDate: this.state.lastDate })
        } else { this.props.receptionss() }
    }

    checked(event) {
        this.setState({ [event.target.name]: event.target.checked })
        event.target.checked
            ? this.props.receptionsMi(this.props.header.name)
            : this.props.receptionss()
    }

    clientView(id) {
        this.setState({ clientView: true })
        let reception = this.props.receptions.receptions.filter(item => item.id == id)
        this.setState({
            client: reception[0]
        })
    }

    closeFormViewing() {
        this.setState({ clientView: false })
    }

    componentDidMount() {
        this.props.receptionss()
    }


    render() {
        return (
            <div className={s.container}>
                <FilterReceptions state={this.state} checked={this.checked} clientChange={this.clientChange} handleSubmit={this.handleSubmit} />
                <table className={s.tableReceptions}>
                    <tbody >
                        <Row date={'Дата'} client={'Клиент'} status={'Статус'}
                            receiving={'Принимающий'} claim={'Жалобы'} diagnosis={'Диагноз'} />
                        {this.props.receptions.receptions.map(item => {
                            return <Row key={item.id} date={item.date} time={item.time} client={item.client} status={item.status}
                                receiving={item.receiving} claim={item.claim} diagnosis={item.diagnosis} id={item.id} clientView={this.clientView} />
                        })}
                    </tbody>
                </table>
                {this.state.clientView ?
                    <ViewingReception client={this.state.client} closeFormViewing={this.closeFormViewing} />
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        receptions: state.receptions,
        header: state.header
    }
}


const mapDispatchToProps = dispatch => {
    return {
        filterDate: (date) => {
            dispatch(filterDate(date))
        },
        filterName: (letters) => {
            dispatch(filterName(letters))
        },
        receptionsMi: (name) => {
            dispatch(receptionsMi(name))
        },
        receptionss: () => {
            dispatch(receptionss())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Receptions)
