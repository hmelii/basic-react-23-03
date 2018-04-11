/*import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        default:
            return articlesState
    }
}*/


import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_ID_COMMENT_TO_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        case ADD_ID_COMMENT_TO_ARTICLE: {

            console.log('payload.idArticle', payload.idArticle)
            console.log('payload.idComment', payload.idComment)
            articlesState[payload.idArticle].comments.push(payload.idComment)
            console.log('articlesState', articlesState)
            return articlesState
        }

        default:
            return articlesState
    }
}





