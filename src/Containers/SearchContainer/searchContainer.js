import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'

/*Form containers */
import InputContainer from '../FormsContainer/formInputContainer';

/**Actions to dispatch */
import { getDB } from '../../dbModel/Actions/Creators/actionCreators'

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            searchTxt: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        this.props.getDB();
    }

    onInputChange(ev, name) {
        if (name === 'searchTxt') {
            this.setState({ searchTxt: ev.target.value })
        }
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row h-100 d-flex align-items-center">
                    <div className="col-sm-10 offset-sm-1 text-center">
                        <h1 className="display-3">Search people</h1>
                        <div className="info-form">
                            <form action="" className="form-inline justify-content-center">
                                <div className="form-group">
                                    <InputContainer
                                        label=""
                                        name="searchTxt"
                                        type="searchTxt"
                                        value={this.state.searchTxt}
                                        placeholder="ex: name@example.com"
                                        onInputChange={this.onInputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary ">search!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


SearchContainer.propTypes = {
    db: PropTypes.object,
    search: PropTypes.object,
    user: PropTypes.object
}

SearchContainer.defaultProps = {
    db: null,
    search: null,
    user: null
}

function mapStateToProps(state) {
    return {
        db: state.db.db,
        search: state.search.search
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDB: () => dispatch(getDB()),
    }
}

export default reduxForm({
    form: 'search',
    // validate: signupValidator,
    // syncErrors: signupValidator,
    enableReinitialize: true
})(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));

