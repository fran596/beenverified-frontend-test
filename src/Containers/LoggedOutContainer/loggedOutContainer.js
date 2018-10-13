
import React from 'react'

/*Container dependencies */
import LoggedOutContent from './loggedOutContent';


/**CSS Styling */
import '../../Styles/landing.css'

const landingTitleTxt = "We'll do the heavy lifting for you!"
const landingPtext = "We have access to the major databases around the country, anything you would like to verify about someone, just type their email."


class LoggedOutContainer extends React.Component {
 
  render() {
    return (
      <div className="row h-100">
          <div className="col-sm-6 bg-landing">
            <div className="landing-content ">
              <h1 className="animated fadeInUp">{landingTitleTxt}</h1>
              <p className="animated fadeIn">{landingPtext}</p>
            </div>
          </div>
          <div className="col-sm-6 ">
            <LoggedOutContent/>
          </div>
        </div>
    );
  }
}

export default LoggedOutContainer;
