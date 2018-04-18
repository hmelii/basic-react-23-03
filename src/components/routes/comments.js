import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import CommentListWithPages from '../comments-list-with-pages'
import PropTypes from 'prop-types'

class CommentListPage extends Component {
    static propTypes = {
        page: PropTypes.number
    }

    render() {
        console.log('---', 'comments list match', this.props.match)
        return (
            <Fragment>
                <Route path = {`${this.props.match.path}/:page`} children = {this.getComments} />
            </Fragment>
        )
    }

    getComments = ({ match }) => {
         const page = !match ? 1 : match.params.page
         return <CommentListWithPages page = { +page } />
     }
}

export default CommentListPage