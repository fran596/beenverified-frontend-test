/*Action types */
import * as Action from '../Types/actionTypes'


const API_URL = 'beenverified.com/hk/dd/email?email='


export const searchPerson = (email) => {
    return function (dispatch) {
        dispatch({
          type: Action.SEARCH_PERSON_REQUEST
        })
        fetch(`https://cors-anywhere.herokuapp.com/${API_URL}${email}`,{
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          
        })
          .then(response => response.json())
          .then(data => {
            dispatch({
              type: Action.SEARCH_PERSON_SUCCESS,
              report: data
            })
          })
          .catch(error => {
            dispatch({
              type: Action.SEARCH_PERSON_FAILURE,
              error: error
            })
          })
      }
  }