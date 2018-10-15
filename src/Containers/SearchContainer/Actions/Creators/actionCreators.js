/*Action types */
import * as Action from '../Types/actionTypes'


const API_URL = 'beenverified.com/hk/dd/email?email='


export const searchPerson = (email) => {
  return function (dispatch) {
    dispatch({
      type: Action.SEARCH_PERSON_REQUEST
    })
    fetch(`https://cors-anywhere.herokuapp.com/${API_URL}${email}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },

    })
      .then(response => response.json())
      .then(data => {
        //Retrieve db for log user activity
        let db = JSON.parse(localStorage.getItem('db'));
        let date = new Date();
        let message = `Searched for ${data.names[0].full} at ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        db.users[db.currentUser].activity.splice(0,0,message);
        //Limit activity to 5 items
        while(db.users[db.currentUser].activity.length > 5){
          db.users[db.currentUser].activity.pop();
        }
        //Save DB
        localStorage.setItem('db', JSON.stringify(db));
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