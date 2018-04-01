import React from 'react'

export default OriginalComponent => class toggle extends React.Component {
    state = {
        isOpen: false
    }


    toggleItem = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return <OriginalComponent {...this.props}
                                  isOpen = {this.state.isOpen}
                                  toggleItem = {this.toggleItem}
        />
    }
}