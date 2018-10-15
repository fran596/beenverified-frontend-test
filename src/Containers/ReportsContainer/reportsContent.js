import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/*Component Dependencies */
import SearchResult from '../SearchContainer/searchResult'

/*Actions to dispatch */
import {deleteReport} from '../../dbModel/Actions/Creators/actionCreators'


class ReportsContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            report: this.props.location.state.report,
            id: this.props.location.state.id
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.completeDelete = this.completeDelete.bind(this);

    }

    componentDidMount() {
        this.setState({report: this.props.location.state.report})
        this.setState({id: this.props.location.state.id})
    }

    handleDelete(e) {
        e.preventDefault();
        this.completeDelete()
    }

    completeDelete() {
        window.alert('will be deleted');
        this.props.deleteReport(this.props.history, this.state.id);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row h-100 d-flex align-items-center">
                    <div className="col-sm-10 offset-sm-1 text-center">
                        <h1 className="display-3">My reports</h1>
                        
                    </div>
                </div>
                <div className="row results-content">
                    <div className="col">
                    <SearchResult res={this.state.report} type={"report"} onDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        )
    }
}


ReportsContent.propTypes = {
    db: PropTypes.object,
    searchRes: PropTypes.object,
    user: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
}

ReportsContent.defaultProps = {
    db: null,
    searchRes: {},
    user: null,
    location: null,
    history: null
}

function mapStateToProps(state) {
    return {
        db: state.db.db,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteReport: (history, id) => dispatch(deleteReport(history, id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReportsContent);
