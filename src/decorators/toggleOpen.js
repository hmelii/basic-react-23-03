import React from 'react'
import PropTypes from "prop-types";

export default (OriginalComponent) => class ToggleOpen extends React.Component {

    static propTypes = {
        toggleOpen: PropTypes.func
    }

    state = {
        isOpen: false
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
}