/*Action types for DB*/
import * as Action from '../Types/actionTypes'

export const addUser = (user) => {
    return function (dispatch) {
        dispatch({
            type: Action.ADD_USER_REQUEST
        })
        if (user) {
            console.log(user)
            let db = JSON.parse(localStorage.getItem('db'));
            if (!db) {
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
            //Add user to DB
            db.users.push(user);
            db.currentUser = user.index;
            //Save DB
            localStorage.setItem('db', JSON.stringify(db));
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
            //Log out user in DB
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

export const addReport = (report, userID) => {
    return function (dispatch) {
        dispatch({
            type: Action.ADD_REPORT_REQUEST
        })
        let db = JSON.parse(localStorage.getItem('db'));
        //If db found
        if (db) {
            //Add report to DB
            db.users[userID].reports.push(report);
            //Log user activity
            let date = new Date();
            let message = `Saved report of ${report.names[0].full} at ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            db.users[db.currentUser].activity.splice(0,0,message);
            //Limit activity to 5 items
            while (db.users[db.currentUser].activity.length > 5) {
                db.users[db.currentUser].activity.pop();
            }
            //Save DB
            localStorage.setItem('db', JSON.stringify(db));
            dispatch({
                type: Action.ADD_REPORT_SUCCESS,
                db: db
            })
        }
        else {

            dispatch({
                type: Action.ADD_REPORT_FAILURE,
                error: "No database found. The report couldn't be added.",
            })
        }

    }
}

export const deleteReport = (history, id) => {
    return function (dispatch) {
        dispatch({
            type: Action.DELETE_REPORT_REQUEST
        })
        let db = JSON.parse(localStorage.getItem('db'));
        //If db found
        if (db) {
            
             //Log user activity
             let date = new Date();
             let message = `Deleted report of ${db.users[db.currentUser].reports[id].names[0].full} at ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
             db.users[db.currentUser].activity.splice(0,0,message);
             //Limit activity to 5 items
             while (db.users[db.currentUser].activity.length > 5) {
                 db.users[db.currentUser].activity.pop();
             }

            //Delete report in DB 
            db.users[db.currentUser].reports.splice(id, 1);

            //Save changes in DB
            localStorage.setItem('db', JSON.stringify(db));
            dispatch({
                type: Action.DELETE_REPORT_SUCCESS,
                db: db
            })
            history.push({
                pathname: '/reports',
                search: '',
                state: {}
            })
        }
        else {

            dispatch({
                type: Action.DELETE_REPORT_FAILURE,
                error: "No database found. The report couldn't be deleted.",
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


