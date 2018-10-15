/**Content of a person's search */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardBody, Alert } from 'reactstrap';

/**Actions to dispatch */
import { addReport } from '../../dbModel/Actions/Creators/actionCreators'

/**Component dependencies */
import SearchNamesRow from './searchNamesRow'
import SearchEmailsRow from './searchEmailsRow'
import SearchJobsRow from './searchJobsRow'
import SearchSocialRow from './searchSocialRow'

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.completeSubmit = this.completeSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.completeSubmit()
    }

    completeSubmit() {
        this.setState({ visible: true });
        this.props.addReport(this.props.res, this.props.db.currentUser);

    }

    render() {
        return (
            <div className="justify-content-right">
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    Report saved
                </Alert>
                <h4>Results:</h4>
                {
                    //If nobody was found show message
                    (!Array.isArray(this.props.res.names) || !this.props.res.names.length) ? (
                        <p>Person not found</p>
                    )
                    //Person was found
                        : (
                            <div className="card" style={{ width: '100%' }} >
                                <CardBody>
                                    <ul className="list-group list-group-flush">
                                        <SearchNamesRow imgs={this.props.res.images} names={this.props.res.names} />
                                        <SearchEmailsRow emails={this.props.res.emails} />
                                        <SearchJobsRow jobs={this.props.res.jobs} />
                                        <SearchSocialRow social={this.props.res.social} />
                                    </ul>

                                </CardBody>
                                {
                                    (this.props.type.localeCompare("search") === 0) ? (
                                        (<button className="btn btn-primary"
                                            onClick={(event) => { this.handleSubmit(event) }} >Save report</button>)
                                    ) : (<button className="btn btn-danger"
                                        onClick={(event) => { this.props.onDelete(event) }}
                                    >Delete report</button>)
                                }

                            </div>
                        )
                }
            </div>
        );
    }
}

SearchResult.propTypes = {
    db: PropTypes.object,
    res: PropTypes.object
}

SearchResult.defaultProps = {
    db: null,
    res: {}
}

function mapStateToProps(state) {
    return {
        db: state.db.db
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addReport: (report, userID) => dispatch(addReport(report, userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
