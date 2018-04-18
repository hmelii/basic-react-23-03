import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Comment from '../comment'
import Loader from '../common/loader'
import {loadComments} from '../../ac'
import {commentsListSelector} from '../../selectors'
import Pager from "../pager";

class CommentListWithPages extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
        loadComments: PropTypes.func.isRequired
    }

    componentDidMount() {
        const {page, loadComments} = this.props
        loadComments(page)
    }



    render() {
        const { page } = this.props
        return (
            <div>
                {this.getBody()}
                <Pager />
            </div>
        )
    }

    getBody() {
        const { comments } = this.props
       if (!comments.length) return <Loader />
        //if (!commentsLoaded) return null

        return (
            <div className="">
                {
                        this.getComments()
                }
            </div>
        )
    }

    getComments() {
        const { comments } = this.props
        return (
            <ul>
                {
                    comments.map(comment =>
                        <li key={comment.id} className="">
                            <Comment id={comment.id}/>
                        </li>)
                }
            </ul>
        )
    }
}


export default connect(state => {
    return {
        comments: commentsListSelector(state)
    }
}, {loadComments})(CommentListWithPages)