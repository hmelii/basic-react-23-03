import { addIdCommentToArticle } from '../ac'
import {ADD_ID_COMMENT_TO_ARTICLE} from "../constants";

export default store => next => action => {
    console.log('---', 'state before', store.getState())
    console.log('---', 'dispatching', action)

    if (action.type === 'ADD_COMMENT') {
        const time_stamp = new Date().getTime().toString()
        action.payload.id = time_stamp



        next({type: ADD_ID_COMMENT_TO_ARTICLE, payload: { idComment: time_stamp, idArticle: action.payload.idArticle }})

    }

    next(action)

    console.log('---', 'state after', store.getState())




}