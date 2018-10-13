// search reducer

const DEFAULT_STATE = {
    report: {}
}

const search = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_PERSON_REQUEST':
            return {
                ...state,
            }
        case 'SEARCH_PERSON_SUCCESS':
            return {
                ...state,
                report: action.report
            }
        case 'SEARCH_PERSON_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default search