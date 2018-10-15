import { createStore, applyMiddleware, combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

/*Reducer imports */
import DatabaseReducer from './dbModel/dbReducer'
import SearchReducer from './Containers/SearchContainer/searchReducer'

const logger = createLogger({
    collapsed: true,
    duration: true,
    diff: true,
})

var reducer = combineReducers({
    db: DatabaseReducer,
    search: SearchReducer,
    form: formReducer,
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(
        ReduxThunk,
        // logger,
    ),
))


export default store