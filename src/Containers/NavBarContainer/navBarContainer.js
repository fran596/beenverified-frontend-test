import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

/**Navbar items */
import LoggedOutNav from './loggedOutNav'
import LoggedInNav from './loggedInNav'


function NavOptions(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn !== -1) {
    return <LoggedInNav />;
  }
  return <LoggedOutNav />;
}

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <NavOptions isLoggedIn={this.props.db.currentUser} />
    );
  }
}

NavBarContainer.propTypes = {
  db: PropTypes.object,
}

NavBarContainer.defaultProps = {
  db: null
}

function mapStateToProps(state) {
  return {
    db: state.db.db
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //   getUser: () => dispatch(getUser()),
    //   logout: (history, session) => dispatch(logout(history, session))
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));