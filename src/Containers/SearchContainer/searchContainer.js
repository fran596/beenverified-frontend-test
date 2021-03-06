/**Container for searching people */

import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'

import { css } from 'react-emotion';
// First way to import
import { FadeLoader } from 'react-spinners';

/*Component Dependencies */
import InputContainer from '../FormsContainer/formInputContainer';
import SearchResult from './searchResult'

/**Form validator */
import searchValidator from '../FormsContainer/searchValidator'

/**CSS Styling*/
import '../../Styles/results.css'

/**Actions to dispatch */
import { getDB } from '../../dbModel/Actions/Creators/actionCreators'
import { searchPerson } from '../SearchContainer/Actions/Creators/actionCreators'

const override = css`
    display: block;
    margin: 1rem auto;
    border-color: red;

`;

function SearchContent(props) {
    const res = props.res;
    //If search was succesulf show result
    if (Object.keys(res.report).length !== 0) {
        return <SearchResult res={res.report} type={props.type} />;
    }
    return <div></div>
}

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            searchTxt: '',
            loading: this.props.searchRes.loading
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.completeSubmit = this.completeSubmit.bind(this);

    }

    componentDidMount() {
        this.props.getDB();
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchRes.loading !== prevProps.searchRes.loading) {
            this.setState({ loading: this.props.searchRes.loading })
        }
    }

    onInputChange(ev, name) {
        if (name === 'searchTxt') {
            this.setState({ searchTxt: ev.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true })
        this.completeSubmit()
    }

    completeSubmit() {
        let values = this.props.form.values;
        let syncErrors = this.props.form.syncErrors;
        /*If no errors of validation */
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
                                <button className="btn btn-primary"
                                    onClick={(event) => { this.handleSubmit(event) }} >search</button>
                            </form>
                        </div>
                        <div className='sweet-loading'>
                            <FadeLoader
                            className={override}
                                sizeUnit={"px"}
                                height={15}
                                width={5}
                                radius={2}
                                margin={"2px"}
                                color={'#4A90E2'}
                                loading={this.state.loading}
                            />
                        </div>
                    </div>
                </div>
                <div className="error-placeholder text-center">
                    {(this.props.form && this.props.form.syncErrors && this.props.form.anyTouched) ? (this.props.form.syncErrors.searchTxt) : ("")}
                </div>
                <div className="row results-content">
                    <div className="col">
                        <SearchContent res={this.props.searchRes} type={"search"} />
                    </div>
                </div>
            </div>
        )
    }
}


SearchContainer.propTypes = {
    db: PropTypes.object,
    searchRes: PropTypes.object,
    user: PropTypes.object
}

SearchContainer.defaultProps = {
    db: null,
    searchRes: {},
    user: null
}

function mapStateToProps(state) {
    return {
        db: state.db.db,
        searchRes: state.search,
        form: state.form.search
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDB: () => dispatch(getDB()),
        searchPerson: (email) => dispatch(searchPerson(email))
    }
}

export default reduxForm({
    form: 'search',
    validate: searchValidator,
    syncErrors: searchValidator,
    enableReinitialize: true
})(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));

