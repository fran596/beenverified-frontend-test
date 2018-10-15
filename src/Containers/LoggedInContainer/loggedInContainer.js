/**Home page component for logged in users */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';

class LoggedInContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      visible: true
    };

  }

  componentDidMount() {
    this.setState({ user: this.props.user });
  }


  render() {
    return (

      <div className="row ">
        <div className="col-sm-6 align-self-center ">
          <Jumbotron>
            <h1 className="display-3">Welcome back!</h1>
            <p className="lead">In iVerify we make sure we deliver the best results for you.</p>
            <hr className="my-2" />
            <p>Start searching today and find out all the information available of the one you look for.</p>
            <p className="lead">
            <a class="btn btn-primary" href="/search" role="button">Start searching</a>
            </p>
          </Jumbotron>
        </div>
        <div className="col-sm-6 justify-content-center align-self-center  ">
          <h5>Recent activity</h5>
          <ListGroup>
            {
              this.props.user.activity.map((val, index) => {
                return <ListGroupItem key={index}>{val}</ListGroupItem>
              })
            }
          </ListGroup>
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

