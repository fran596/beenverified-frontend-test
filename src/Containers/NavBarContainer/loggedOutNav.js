/**Nav bar component for logged out users */

import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { NavItem, Nav, Navbar, NavbarBrand } from 'reactstrap';

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
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    //Try to log in user
    this.props.logIn(user);
  }

  render() {
    return (
      <Navbar style={{ backgroundColor: '#00796b' }} dark expand="md">
        <NavbarBrand href="/">iVerify</NavbarBrand>
        <Nav className="ml-auto" navbar>
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
        </Nav>
      </Navbar>
    );
  }
}

LoggedOutNav.propTypes = {
  logout: PropTypes.func,
}

LoggedOutNav.defaultProps = {
  logIn: () => { },
}

function mapStateToProps(state) {
  return {
    form: state.form.signin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (user) => dispatch(logIn(user))
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedOutNav));