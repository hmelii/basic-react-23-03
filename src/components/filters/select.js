import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import {connect} from "react-redux";
import {filterByName, selectedArticles} from "../../ac";

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    handleChange = selected  => {
        const { selectedArticles } = this.props
        selectedArticles(selected)
    }

    render() {
        const { articles } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={ options }
            value={ this.props.selected }
            onChange={ this.handleChange }
            multi
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.selectedArticles
}), { selectedArticles })(SelectFilter)
