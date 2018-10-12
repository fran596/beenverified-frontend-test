const signupValidator = values => {
  const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errors = {};

  /*Email validator */
  if (!values.email) {
    errors.email = 'An email is required';
  }
  else if (values.email.match(regex) === null) {
    errors.email = "A valid email address is required";
  }

  let db = JSON.parse(localStorage.getItem('db'));
  if (db) {
    let users = db.users;
    //Check if email is already taken
    let res = true;
    for (let i = 0; i < users.length; ++i) {
      if (users[i].email === values.email) {
        res = false;
        break;
      }
    }
    if (!res) {
      errors.email = "That email is already taken";
    }
  }


  /*Password validator */
  if (!values.password) {
    errors.password = 'A password is required';
  }
  else if (values.password !== "BV-API-Challenge") {
    errors.password = "A valid password is required"
  }

  return errors;
};



export default signupValidator;

