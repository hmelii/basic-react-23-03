import {createSelector} from 'reselect'

export const articleListSelector = state => state.articles
export const commentListSelector = state => state.comments
export const filtersSelector = state => state.filters
export const idSelector = (_, props) => props.id

export const filtersSelectionSelector = createSelector(filtersSelector, (filters) => filters.selected)

export const filtratedArticles = createSelector(articleListSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'calculating filtration')

    const returnArticles = {}

    for (let key in articles) {
        if (articles.hasOwnProperty(key)) {
            let article = articles[key]
            const published = Date.parse(article.date)
            if ((!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))) {
                returnArticles[article.id] = article
            }
        }
    }
    return returnArticles
})

export const createCommentSelector = () => createSelector(commentListSelector, idSelector,  (comments, id) => {
    console.log('---', 'comment selector', id)
    return comments[id]
})

export const createArticleSelector = () => createSelector(articleListSelector, idSelector, (articles, id) => {
    console.log('---', 'article selector', id)
    return articles[id]
})