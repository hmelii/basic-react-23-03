import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Chart extends Component {

    static propTypes = {
        articles: PropTypes.array,
    }

    static defaultProps = {
        articles: []
    }

    componentDidMount() {
        //do some charting with d3 on this.refs.container
    }

    componentWillReceiveProps() {
        //update chart
    }

    componentWillUnmount() {
        //cleanup
    }

    render() {
        return <div ref = "container" />
    }
}

export default Chart