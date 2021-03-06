// dataBase reducer

const DEFAULT_STATE = {
    db: {
        users: [],
        currentUser: -1
    },
    loading: false
}

const dataBase = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_USER_REQUEST':
            return {
                ...state,
                loading: false
            }
        case 'ADD_USER_SUCCESS':
            return {
                ...state,
                db: {
                    users: [...state.db.users, { ...action.user }],
                    currentUser: action.user.index
                },
                loading: true
            }
        case 'ADD_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                loading: false
            }
        case 'ADD_REPORT_REQUEST':
            return {
                ...state,
                loading: false
            }

        case 'ADD_REPORT_SUCCESS':
            return {
                ...state,
                db: action.db,
                loading: true
            }

        case 'ADD_REPORT_FAILURE':
            return {
                ...state,
                error: action.error,
            }
        case 'DELETE_REPORT_REQUEST':
            return {
                ...state,
                loading: false
            }

        case 'DELETE_REPORT_SUCCESS':
            return {
                ...state,
                db: action.db,
                loading: true
            }

        case 'DELETE_REPORT_FAILURE':
            return {
                ...state,
                error: action.error,
            }
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                db: {
                    users: [...state.db.users],
                    currentUser: action.user.index
                },
                loading: true
            }
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                error: action.error
            }

        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                loading: false
            }
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                db: {
                    users: [...state.db.users],
                    currentUser: -1
                },
                loading: true
            }
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'GET_DB_REQUEST':
            return {
                ...state,
                loading: false
            }

        case 'GET_DB_SUCCESS':
            return {
                ...state,
                db: action.db,
                loading: true
            }

        case 'GET_DB_FAILURE':
            return {
                ...state,
                error: action.error,
                db: action.newDB,
            }
        default:
            return state
    }
}

export default dataBase