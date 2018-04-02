import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from "prop-types";
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array,
    }

    static defaultProps = {
        articles: []
    }

    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default SelectFilter