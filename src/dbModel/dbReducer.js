// dataBase reducer

const DEFAULT_STATE = {
    db: {
        users: [],
        currentUser: -1
    }
}

const dataBase = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_USER_REQUEST':
            return {
                ...state,
            }
        case 'ADD_USER_SUCCESS':
            return {
                ...state,
                db: {
                    users: [...state.db.users, { ...action.user }],
                    currentUser: action.user.index
                },
            }
        case 'ADD_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'GET_DB_REQUEST':
            return {
                ...state,
            }

        case 'GET_DB_SUCCESS':
            return {
                ...state,
                db: action.db
            }

        case 'GET_DB_FAILURE':
            return {
                ...state,
                error: action.error,
                db: action.newDB
            }
        default:
            return state
    }
}

export default dataBase