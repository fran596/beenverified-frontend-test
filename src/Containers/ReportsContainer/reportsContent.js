import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/*Component Dependencies */
import SearchResult from '../SearchContainer/searchResult'



class ReportsContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            report: this.props.location.state.report,
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.completeSubmit = this.completeSubmit.bind(this);

    }

    componentDidMount() {
        this.setState({report: this.props.location.state.report})
    }

    onInputChange(ev, name) {
        if (name === 'searchTxt') {
            this.setState({ searchTxt: ev.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.completeSubmit()
    }

    completeSubmit() {
        let values = this.props.form.values;
        let syncErrors = this.props.form.syncErrors;
        console.log(this.state.searchTxt)
        if (!syncErrors) {
            this.props.searchPerson(this.state.searchTxt);
        }
        else {
            if (typeof values === 'undefined') {
                window.alert("Please complete the search field");
            }
            else {
                window.alert("Please correct the errors on the search field");
            }
        }
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
                    <SearchResult res={this.state.report} type={"report"}/>
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
    location: PropTypes.object
}

ReportsContent.defaultProps = {
    db: null,
    searchRes: {},
    user: null,
    location: null
}

function mapStateToProps(state) {
    return {
        db: state.db.db,
    }
}




export default connect(mapStateToProps)(ReportsContent);
