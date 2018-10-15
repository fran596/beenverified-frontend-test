/**Component for the Home path */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**Container dependencies*/
import LoggedOutContainer from '../LoggedOutContainer/loggedOutContainer'
import LoggedInContainer from '../LoggedInContainer/loggedInContainer'

/**Actions to dispatch */
import { getDB } from '../../dbModel/Actions/Creators/actionCreators'

/**CSS Styling */
import '../../Styles/landing.css'
import 'animate.css'

function LandingContent(props) {
  const isLoggedIn = props.isLoggedIn.currentUser;
  //If user is logged in show logged in view
  if (isLoggedIn !== -1) {
    let users = props.isLoggedIn.users
    return <LoggedInContainer user={users[isLoggedIn]}/>;
  }
  //Show logged out view
  return <LoggedOutContainer />;
}

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.getDB();
  }

  render() {
    return (
      <div className="container-fluid d-flex h-100">
        <LandingContent isLoggedIn={this.props.db}/>
      </div>
    );
  }


}

LandingContainer.propTypes = {
  db: PropTypes.object,
}

LandingContainer.defaultProps = {
  db: null,
}

function mapStateToProps(state) {
  return {
    db: state.db.db
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDB: () => dispatch(getDB()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
