import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import {findDOMNode} from 'react-dom'
import Article from '../article'
import accordion from '../../decorators/accordion'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    componentDidMount() {
        const { fetchData } = this.props
        if (fetchData) fetchData()
    }

    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles, openItemId, toggleItem, selectedArticles, range: { from, to } } = this.props

        return articles.map(article => {

            if (selectedArticles && selectedArticles.length && !selectedArticles.find(item => item.label === article.title)) {
                return ''
            }

            if (from) {
                if (new Date(from).getTime() > new Date(article.date).getTime()) {
                    return ''
                }
            }

            if (to) {
                if (new Date(to).getTime() < new Date(article.date).getTime()) {
                    return ''
                }
            }

            return <li key = {article.id} className = "test--article-list__item">
                <Article article = {article}
                         isOpen = {article.id === openItemId}
                         toggleOpen = {toggleItem}
                         ref = {this.setListElementRef}
                />
            </li>
        })
    }

    setListElementRef = _ => {
        //console.log('---', listElement, findDOMNode(listElement))
    }
}


export default connect(state => ({
    articles: state.articles,
    selectedArticles: state.selectedArticles,
    range: state.rangeDates,

}))(accordion(ArticleList))