import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



class SearchResult extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
          {this.props.res.names[0].full}
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
