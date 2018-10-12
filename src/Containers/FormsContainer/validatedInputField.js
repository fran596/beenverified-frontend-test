import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

/**CSS Styling */
import '../../Styles/input.css'

const ValidatedInputField = ({options, input, type, meta: { touched, error, warning }}, props) =>(
  <div>
    <div>
      {options && 
      <Input 
        {...input}
        type={type} 
        value={options.defaultValue || ''} 
        onChange={(ev)=>options.onInputChange(ev,input.name)}
      /> }
      {!options && <Input {...input} type={type}  />}
    </div>
    {touched &&
        error &&
        <div className="error-placeholder">
          {error}
        </div>}
  </div>
  )

  ValidatedInputField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.object,
    type: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object
}

ValidatedInputField.defaultProps = {
    input: null,
    label: null,
    type: '',
    meta: null,
    options: null
}

export default ValidatedInputField;