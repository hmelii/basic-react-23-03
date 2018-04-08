import { SELECT_RANGE } from "../constants";

export default (rangeDatesState = {from: null, to: null}, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_RANGE:
            return payload

        default:
            return rangeDatesState
    }
}