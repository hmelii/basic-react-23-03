import { SELECTED_ARTICLES } from "../constants";

export default (selectedArticlesState = null, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECTED_ARTICLES:
            return payload

        default:
            return selectedArticlesState
    }
}