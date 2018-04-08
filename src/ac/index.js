import {INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLES, SELECT_RANGE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectedArticles(selected) {
    return {
        type: SELECTED_ARTICLES,
        payload: selected
    }
}

export function selectRange(range) {
    return {
        type: SELECT_RANGE,
        payload: range
    }
}