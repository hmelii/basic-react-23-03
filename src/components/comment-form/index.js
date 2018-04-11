import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addComment } from '../../ac'

import './style.css'
class CommentForm extends Component {

    state = {
        user: '',
        text: ''
    }

    static propTypes = {
        idArticle: PropTypes.string.isRequired
    }

    handleChange = type => event => {
        this.setState({
            [type]: event.target.value
        })
    }

    handleSubmit = event => {

        event.preventDefault()
        const { addComment, idArticle } = this.props
        addComment({
            idArticle: idArticle,
            user: this.state.user,
            text: this.state.text
        })

    }

    render() {
        const { user, text } = this.state
        return (
            <form onSubmit={ this.handleSubmit }>
                <h3>Add comment</h3>
                <p>
                    <input className="field" type="text" value={ user } onChange={ this.handleChange('user') } />
                </p>
                <p>
                    <textarea className="field" rows="5" value={ text } onChange={ this.handleChange('text') } />
                </p>
                <p>
                    <button>Add</button>
                </p>
            </form>
        )
    }
}


export default connect(null, { addComment })(CommentForm)