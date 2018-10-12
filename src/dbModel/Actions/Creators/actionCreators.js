/*Action types */
import * as Action from '../Types/actionTypes'


// const API_URL = 'http://localhost:8081/api/pages'


export const addUser = (user) => {
    return function (dispatch) {
        dispatch({
            type: Action.ADD_USER_REQUEST
        })
        if(user){
            dispatch({
                type: Action.ADD_USER_SUCCESS,
                user: user
            })
        }
        else{
            dispatch({
                type: Action.ADD_USER_FAILURE,
                error: "Can't add user"
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
    if(db){
        dispatch({
            type: Action.GET_DB_SUCCESS,
            db: db
        })
    }
    else{
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


