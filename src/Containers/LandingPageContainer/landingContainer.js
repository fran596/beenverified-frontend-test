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
  if (isLoggedIn !== -1) {
    let users = props.isLoggedIn.users
    return <LoggedInContainer user={users[isLoggedIn]}/>;
  }
  return <LoggedOutContainer />;
}

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.getDB();
  }

  render() {
    return (
      <div className="container-fluid h-100">
        {/* <LoggedOutContainer/> */}
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
