import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Comment from '../comment'
import Loader from '../common/loader'
import {loadComments} from '../../ac'
import {commentsListSelector} from '../../selectors'

class Pager extends Component {
    static propTypes = {
    }





    render() {
        const { router } = this.props
        console.log('router', router)
        return (
            <div>
            </div>
        )
    }


}


export default connect(
    store => ({
        router: store
    })
)(Pager)