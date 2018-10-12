import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**Container dependencies*/
import SignUpContainer from '../SignUpContainer/signupContainer'

/**Actions to dispatch */
import { getDB } from '../../dbModel/Actions/Creators/actionCreators'

/**CSS Styling */
import '../../Styles/landing.css'
import 'animate.css'

const landingTitleTxt = "We'll do the heavy lifting for you!"
const landingPtext = "We have access to the major databases around the country, anything you would like to verify about someone, just type their email."

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.getDB();
  }

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-sm-6 bg-landing">
            <div className="landing-content ">
              <h1 className="animated fadeInUp">{landingTitleTxt}</h1>
              <p className="animated fadeIn">{landingPtext}</p>
            </div>
          </div>
          <div className="col-sm-6 ">
            <SignUpContainer />
          </div>
        </div>
      </div>
    );
  }


}

LandingContainer.propTypes = {
  db: PropTypes.object,
}

LandingContainer.defaultProps = {
  db: null,
  // history: null
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
