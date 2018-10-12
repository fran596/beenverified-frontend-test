import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import LoggedOutNav from './loggedOutNav'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    } from 'reactstrap';

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return (
            <div>
            <Navbar style={{backgroundColor: '#00796b'}} dark expand="md">
              <NavbarBrand href="/">iVerify</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              {/* <h1>OTRO TEXTO</h1> */}
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <LoggedOutNav/>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }
}

NavBarContainer.propTypes = {
    // logout: PropTypes.func,
    // getUser: PropTypes.func,
    // user: PropTypes.object,
    // history: PropTypes.object
  }
  
  NavBarContainer.defaultProps = {
    // logout: ()=>{},
    // getUser: ()=>{},
    // user: null,
    // history: null
  }
  
  function mapStateToProps(state) {
    return {
    //   user: state.user
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    //   getUser: () => dispatch(getUser()),
    //   logout: (history, session) => dispatch(logout(history, session))
    }
  }
  
  
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));