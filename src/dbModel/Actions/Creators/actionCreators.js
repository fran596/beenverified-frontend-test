/*Action types */
import * as Action from '../Types/actionTypes'

export const addUser = (user) => {
    return function (dispatch) {
        dispatch({
            type: Action.ADD_USER_REQUEST
        })
        if (user) {
            dispatch({
                type: Action.ADD_USER_SUCCESS,
                user: user
            })
        }
        else {
            dispatch({
                type: Action.ADD_USER_FAILURE,
                error: "Can't add user"
            })
        }
    }
}

export const logIn = (user) => {
    return function (dispatch) {
        dispatch({
            type: Action.LOG_IN_REQUEST
        })
        //Login user is not empty
        if (user) {
            //Retrieve db for user checking
            let db = JSON.parse(localStorage.getItem('db'));
            if (db) {
                let users = db.users;
                //Check if email and password match
                let res = null;
                for (let i = 0; i < users.length; ++i) {
                    if (users[i].email.localeCompare(user.email) === 0
                        && users[i].password.localeCompare(user.password) === 0) {
                        res = users[i];
                        break;
                    }
                }
                //User found and data matches
                if (res !== null) {
                    db.currentUser = res.index;
                    localStorage.setItem('db', JSON.stringify(db))
                    dispatch({
                        type: Action.LOG_IN_SUCCESS,
                        user: res
                    })
                }
                //User not found or data doesn't match
                else {
                    dispatch({
                        type: Action.LOG_IN_FAILURE,
                        error: "Can't login"
                    })
                    window.alert("Can't log in. Check that your email and password are correct");
                }

            }

        }
        //Login user is empty
        else {
            dispatch({
                type: Action.LOG_IN_FAILURE,
                error: "Can't login"
            })
            window.alert("Can't log in. Check that your email and password are correct");
        }
    }
}

export const logOut = (history) => {
    return function (dispatch) {
        dispatch({
            type: Action.LOG_OUT_REQUEST
        })
        let db = JSON.parse(localStorage.getItem('db'));
        //If db found
        if (db) {
            //Update DB
            db.currentUser = -1;
            localStorage.setItem('db', JSON.stringify(db));
            /*Redirect user to home */
            history.push({
                pathname: '/',
                search: '',
                state: {}
            })
            dispatch({
                type: Action.LOG_OUT_SUCCESS,
                db: db
            })
        }
        else {
            dispatch({
                type: Action.LOG_OUT_FAILURE,
                error: "No database found. Could'nt log out",
            })
        }
    }
}

export const getDB = () => {
    return function (dispatch) {
        dispatch({
            type: Action.GET_DB_REQUEST
        })
        let db = JSON.parse(localStorage.getItem('db'));
        //If db found
        if (db) {
            dispatch({
                type: Action.GET_DB_SUCCESS,
                db: db
            })
        }
        else {
            //If no DB create a new one
            db = {
                users: [],
                currentUser: -1
            };
            //Save DB to local storage
            localStorage.setItem('db', JSON.stringify(db));
            dispatch({
                type: Action.GET_DB_FAILURE,
                error: 'No database found. A new database will be created',
                newDB: db
            })
        }

    }
}


