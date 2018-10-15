/**Home page component for logged in users */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class LoggedInContainer extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
          user: undefined,
          visible: true
        };
       
    }

    componentDidMount(){
        this.setState({user: this.props.user});
    }


  render() {
    return (
      <div className="row h-100">
          <div className="col-sm-6">
            <h3>Welcome back {this.props.user.email} </h3>
          </div>
          <div className="col-sm-6 ">
       
          </div>
        </div>
    );
  }
}

LoggedInContainer.propTypes = {
    db: PropTypes.object,
    user: PropTypes.object
  }
  
  LoggedInContainer.defaultProps = {
    db: null,
    user: null
  }
  
  function mapStateToProps(state) {
    return {
      db: state.db.db
    }
  }
  
  
export default connect(mapStateToProps)(LoggedInContainer);

