import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

/**Actions to dispatch */
import { getDB } from '../dbModel/Actions/Creators/actionCreators'


class PrivateRoute extends React.Component {


    componentDidMount() {
        this.props.getDB()
    }

    render() {
        const { component: Component, db, ...rest } = this.props
        return (
            this.props.db.loading &&
            <Route
                {...rest}
                render={(props) =>
                    db.db.currentUser !== (-1)
                        ? <Component {...props} />
                        : <Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                        />
                }
            />
        )
    }
}

PrivateRoute.propTypes = {
    getDB: PropTypes.func,
    history: PropTypes.object
}

PrivateRoute.defaultProps = {
    getDB: () => { },
    history: null
}

function mapStateToProps(state) {
    return {
        db: state.db
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDB: () => dispatch(getDB())
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
