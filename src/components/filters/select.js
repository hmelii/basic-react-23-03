import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articleListSelector, filtersSelectionSelector} from '../../selectors'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {

        const { articles, selected } = this.props
        const options = [];

        for (let article in articles) {
            options.push({
                label: articles[article].title,
                value: articles[article].id
            })
        }

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({
    selected: filtersSelectionSelector(state),
    articles: articleListSelector(state)
}), { changeSelection })(SelectFilter)