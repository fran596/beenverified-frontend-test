/**Content showed for loggedout users */

import React from 'react'
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/*Form containers */
import InputContainer from '../FormsContainer/formInputContainer';

/**Actions to dispatch */
import { addUser } from '../../dbModel/Actions/Creators/actionCreators'

/**Dependencies */
import User from '../../dbModel/UserObject'

/* Validation  for the form */
import signupValidator from '../FormsContainer/signupValidator'

/**CSS Styling */
import '../../Styles/landing.css'

class LoggedOutContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      db: null,
      email: '',
      password: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeSubmit = this.completeSubmit.bind(this);
  }

  componentdidMount() {
    //Set local db before loading 
    this.setState({db: this.props.db});
  }

  componentDidUpdate(prevProps) {
    //If local db changes, update localstorage db
    if (this.props.db !== prevProps.db) {
      localStorage.setItem('db', JSON.stringify(this.props.db));
    }
  }


  onInputChange(ev, name) {
    if (name === 'email') {
      //this.props.checkMail(ev.target.value, this.props.db.users);
      this.setState({ email: ev.target.value })
    }
    else if (name === 'password') {
      this.setState({ password: ev.target.value })
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    this.completeSubmit()
  }

  completeSubmit(){
    let values = this.props.form.values;
    let syncErrors = this.props.form.syncErrors;
    /*If no errors of validation */
    if (!syncErrors) {
      let user = new User(this.state.email, this.state.password, [], this.props.db.users.length);
      this.props.addUser(user);
      console.log(user);
    }
    else {
      if (typeof values === 'undefined') {
        window.alert("Please complete this form");
      }
      else {
        window.alert("Please correct the errors on this form");
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mx-auto">
          <div className="col-sm-12 center" id="signup">
            <h2>Sign up today and start verifying!</h2>
            <form>
              <InputContainer
                label="Email Address"
                name="email"
                type="text"
                value={this.state.email}
                placeholder=""
                text="The name of the database you want to use for your CMS"
                onInputChange={this.onInputChange}
                onKeyPress={()=>{}}
              />
              <InputContainer
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                placeholder=""
                text="The name of the database you want to use for your CMS"
                onInputChange={this.onInputChange}
                onKeyPress={()=>{}}
              />
              <div className="d-flex justify-content-right">
                <button
                  className="btn btn-primary"
                  onClick={(event) => {this.handleSubmit(event)}}
                >
                  Sign up
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoggedOutContent.propTypes = {
  db: PropTypes.object,
  form: PropTypes.object
}

LoggedOutContent.defaultProps = {
  addUser: () => {}
}

function mapStateToProps(state) {
  return {
    db: state.db.db,
    form: state.form.signup
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => dispatch(addUser(user))
  }
}


export default reduxForm({
  form: 'signup',
  validate: signupValidator,
  syncErrors: signupValidator,
  enableReinitialize: true
})(connect(mapStateToProps, mapDispatchToProps)(LoggedOutContent))
