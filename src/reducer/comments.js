import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (commentsState = defaultComments, action) => {
    const { type, payload } = action

    switch (type) {

        case ADD_COMMENT: {
            commentsState[payload.id] = payload
            return commentsState
        }

        default:
            return commentsState
    }
}