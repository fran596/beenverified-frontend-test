import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import SearchNamesRow from './searchNamesRow'
import SearchEmailsRow from './searchEmailsRow'
import SearchJobsRow from './searchJobsRow'

class SearchResult extends React.Component {

    componentDidMount() {

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
                                    </ul>
                                    <Button>Save report</Button>
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
        // getDB: () => dispatch(getDB()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
