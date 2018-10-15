/**Nav bar component for logged in users */

import React from 'react'
import { withRouter, Link } from 'react-router-dom'
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
        this.props.logOut(this.props.history);

    }

    render() {
        return (
            <Navbar style={{ backgroundColor: '#00796b' }} dark expand="md">
                <NavbarBrand href="/">iVerify</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className={(window.location.pathname === '/') ? "nav-link active" : "nav-link"} to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={(window.location.pathname === '/search') ? "nav-link active" : "nav-link"} to="/search">New Search</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={(window.location.pathname === '/reports' || window.location.pathname === '/reports/view') ? "nav-link active" : "nav-link"} to="/reports">My reports</Link>
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
}

LoggedInNav.defaultProps = {
    logOut: () => { },
}

function mapStateToProps(state) {
    return {
        form: state.form.signin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: (history) => dispatch(logOut(history))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInNav));