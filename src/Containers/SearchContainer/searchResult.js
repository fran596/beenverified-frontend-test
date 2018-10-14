import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {CardBody} from 'reactstrap';

/**Actions to dispatch */
import { addReport } from '../../dbModel/Actions/Creators/actionCreators'

import SearchNamesRow from './searchNamesRow'
import SearchEmailsRow from './searchEmailsRow'
import SearchJobsRow from './searchJobsRow'
import SearchSocialRow from './searchSocialRow'

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.completeSubmit = this.completeSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.completeSubmit()
    }

    completeSubmit() {
        this.props.addReport(this.props.res, this.props.db.currentUser);
        window.alert('File will be saved');
    }

    render() {
        return (
            <div className="justify-content-right">
                <h4>Results:</h4>
                {
                    (!Array.isArray(this.props.res.names) || !this.props.res.names.length) ? (
                        <p>Person not found</p>
                    )
                        : (
                            <div className="card" style={{ width: '100%' }} >
                                <CardBody>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span>
                                                <SearchNamesRow imgs={this.props.res.images} names={this.props.res.names} />
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>
                                                <SearchEmailsRow emails={this.props.res.emails}/>
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>
                                                <SearchJobsRow jobs={this.props.res.jobs}/>
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>
                                                <SearchSocialRow social={this.props.res.social}/>
                                            </span>
                                        </li>
                                    </ul>
                                    {/* <Button>Save report</Button> */}
                                    <button className="btn btn-primary" 
                                onClick={(event) => {this.handleSubmit(event)}} >Save report</button>
                                </CardBody>
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
