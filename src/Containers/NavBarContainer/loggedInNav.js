import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    NavItem, NavLink, NavbarToggler, Nav, Collapse, Navbar, NavbarBrand,
    DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem
} from 'reactstrap';

/**Actions to dispatch */
import { logOut } from '../../dbModel/Actions/Creators/actionCreators'

/**CSS Styling */
import '../../Styles/loggedout.css'

class LoggedInNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleSubmit(e) {
        this.props.logOut();
    }

    render() {
        return (
            <Navbar style={{ backgroundColor: '#00796b' }} dark expand="md">
                <NavbarBrand href="/">iVerify</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Account
                                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={(event) => { this.handleSubmit(event) }}>
                                    Log out
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

LoggedInNav.propTypes = {
    logout: PropTypes.func,
    // getUser: PropTypes.func,
    // user: PropTypes.object,
    // history: PropTypes.object
}

LoggedInNav.defaultProps = {
    logOut: () => { },
    // getUser: ()=>{},
    // user: null,
    // history: null
}

function mapStateToProps(state) {
    return {
        //   user: state.user
        form: state.form.signin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //   getUser: () => dispatch(getUser()),
        //   logout: (history, session) => dispatch(logout(history, session))
        logOut: () => dispatch(logOut())
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInNav));