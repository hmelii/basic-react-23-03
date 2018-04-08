import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './select'
import rangeDates from './date-range'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectedArticles,
    rangeDates
})