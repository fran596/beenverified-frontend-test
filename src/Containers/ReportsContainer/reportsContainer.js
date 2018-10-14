import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';

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
        return <LoggedInContainer user={users[isLoggedIn]} />;
    }
    return <LoggedOutContainer />;
}

class ReportsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleReport = this.handleReport.bind(this);
    }

    componentDidMount() {
        this.props.getDB();
    }

    handleReport(ev, id) {
        ev.preventDefault();
        window.alert('Funciona');
        console.log(id);
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row">
                    <div className="col ">
                        <h1 className="display-3 text-center">My reports</h1>
                        {
                            (!Array.isArray(this.props.db.users[this.props.db.currentUser].reports) || !this.props.db.users[this.props.db.currentUser].reports.length) ? (
                                (<div className="text-center"><h6>Start searching to generate a report</h6></div>)
                            ) : (<div></div>)
                        }
                        <ListGroup flush>

                            {
                                this.props.db.users[this.props.db.currentUser].reports.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            <ListGroupItem
                                                tag="a"
                                                href=""
                                                onClick={(ev, id) => { this.handleReport(ev, key) }}>
                                                <span>Person: </span>
                                                {item.names.map((val, index, arr) => {
                                                    let text = val.full
                                                    if (index !== arr.length - 1) {
                                                        return (`${text},`)
                                                    }
                                                    else {
                                                        return (` ${text}`)
                                                    }
                                                })}
                                            </ListGroupItem>
                                        </div>
                                    )
                                })
                            }
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }


}

ReportsContainer.propTypes = {
    db: PropTypes.object,
}

ReportsContainer.defaultProps = {
    db: {},
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


export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
