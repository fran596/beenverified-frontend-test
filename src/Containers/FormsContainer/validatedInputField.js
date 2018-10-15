import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

/**CSS Styling */
import '../../Styles/input.css'

const ValidatedInputField = ({options, input, type, meta: { touched, error, warning }}, props) =>(
  <div>
    <div>
      {/**Input component with options passed */}
      {options && 
      <Input 
        {...input}
        style={options.style || {}}
        type={type} 
        placeholder={options.placeholder || ''}
        value={options.defaultValue || ''} 
        onChange={(ev)=>options.onInputChange(ev,input.name)}
      /> }
       {/**Input component without options passed */}
      {!options && <Input {...input} type={type}  />}
    </div>
     {/**Show errors in case the validation didn't match */}
    {touched &&
        error && type.localeCompare("searchTxt")!== 0 ? (
          <div className="error-placeholder">
          {error}
        </div>
        ) : (<div></div>)
    }
        
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