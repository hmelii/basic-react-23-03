import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import {findDOMNode} from 'react-dom'
import Article from '../article'
import accordion from '../../decorators/accordion'
import {filtratedArticles} from '../../selectors'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    componentDidMount() {
        const { fetchData } = this.props
        if (fetchData) fetchData()
    }

    render() {
        console.log('---', 'rendering list')
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles, openItemId, toggleItem } = this.props

        const articlesRender = []

        for (let key in articles) {
            if (articles.hasOwnProperty(key)) {
                articlesRender.push(
                    <li key = {articles[key].id} className = "test--article-list__item">
                        <Article id = { key }
                                 isOpen = {articles[key].id === openItemId}
                                 toggleOpen = {toggleItem}
                                 ref = {this.setListElementRef}
                        />
                    </li>
                )
            }
        }

        return articlesRender

    }

    setListElementRef = _ => {
        //console.log('---', listElement, findDOMNode(listElement))
    }
}

export default connect(state => {
    console.log('---', 'connect')
    return {
        articles: filtratedArticles(state)
    }
})(accordion(ArticleList))