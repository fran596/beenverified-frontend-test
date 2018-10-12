import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { NavItem, NavLink } from 'reactstrap';

/*Form containers */
import InputContainer from '../FormsContainer/formInputContainer';

/**Actions to dispatch */
import { logIn } from '../../dbModel/Actions/Creators/actionCreators'

/**CSS Styling */
import '../../Styles/loggedout.css'

class LoggedOutNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeSubmit = this.completeSubmit.bind(this);
  }


  onInputChange(ev, name) {
    if (name === 'email') {
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

  completeSubmit() {
    //some code
    // console.log([this.state.email, this.state.password])
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logIn(user);
  }

  render() {
    return (
      <div>
        <NavItem>
          <form>
            <div className="form-row">
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={(ev, name) => { this.onInputChange(ev, 'email') }}>
                </input>
              </div>
              <div className="col-sm-5">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(ev, name) => { this.onInputChange(ev, 'password') }}>
                </input>
              </div>
              <div className="col-sm-2">
                <button type="submit"
                  className="btn btn-primary"
                  onClick={(event) => { this.handleSubmit(event) }}
                >
                  Sign in
               </button>
              </div>
            </div>
          </form>
        </NavItem>
      </div>
    );
  }
}

LoggedOutNav.propTypes = {
  logout: PropTypes.func,
  // getUser: PropTypes.func,
  // user: PropTypes.object,
  // history: PropTypes.object
}

LoggedOutNav.defaultProps = {
  logIn: ()=>{},
  // getUser: ()=>{},
  // user: null,
  // history: null
}

function mapStateToProps(state) {
  return {
    //   user: state.user
    form: state.form.signin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //   getUser: () => dispatch(getUser()),
    //   logout: (history, session) => dispatch(logout(history, session))
    logIn: (user) => dispatch(logIn(user)) 
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedOutNav));