// search reducer

const DEFAULT_STATE = {
    report: {},
    loading: false
}

const search = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_PERSON_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'SEARCH_PERSON_SUCCESS':
            return {
                ...state,
                report: action.report,
                loading: false
            }
        case 'SEARCH_PERSON_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

export default search