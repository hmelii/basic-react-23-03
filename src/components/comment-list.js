import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import Comment from './comment'
import toggle from '../decorators/toggle'

class CommentList extends Component {
    render() {
        const { isOpen, toggleItem } = this.props
        return (
            <div>
                <button onClick = {toggleItem}>{isOpen ? 'hide comments' : 'show comments'}</button>
                { isOpen && this.getComments() }


            </div>
        )
    }

    getComments() {
        const { comments, openItemId, toggleItem } = this.props
        const commentsItems = comments.map(comment => (
            <li key = {comment.id}>
                <Comment comment = {comment}
                         isOpen = {comment.id === openItemId}
                         toggleOpen = {toggleItem}
                         ref = {this.setListElementRef}
                />
            </li>
        ))

        return (
            <ul>
                { commentsItems }
            </ul>
        )
    }

    setListElementRef = listElement => {
        console.log('---', listElement, findDOMNode(listElement))
    }
}

export default toggle(CommentList)