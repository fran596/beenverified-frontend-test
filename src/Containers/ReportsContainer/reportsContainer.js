/**Container for the reports of a user */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';


/**Actions to dispatch */
import { getDB } from '../../dbModel/Actions/Creators/actionCreators'

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
        let report = this.props.db.users[this.props.db.currentUser].reports[id]
        //Redirect user to report that wants to view
        this.props.history.push({
            pathname: '/reports/view',
            search: '',
            state: {report:report, id:id}
          })
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row">
                    <div className="col ">
                        <h1 className="display-3 text-center">My reports</h1>
                        {
                            //If there are not reports show message
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
    history: PropTypes.object
}

ReportsContainer.defaultProps = {
    db: {},
    history: null
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
