//decorator === Higher Order Component
import React from 'react'
import PropTypes from "prop-types";

export default OriginalComponent => class DecoratedComponent extends React.Component {

    static propTypes = {
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    }

    state = {
        openItemId: null
    }

    toggleItem = openItemId => {
        const { openItemId: currentOpenItemId } = this.state

        this.setState({ openItemId: (openItemId === currentOpenItemId ? null : openItemId )})
    }

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId = {this.state.openItemId}
                                  toggleItem = {this.toggleItem}
        />
    }
}