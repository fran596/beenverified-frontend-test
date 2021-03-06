import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form';

import { FormGroup, Label } from 'reactstrap'

import InputField from './validatedInputField'

const FormInputContainer = (props) => (
    <div>
        <FormGroup>
            <Label>{props.label}</Label>
            <Field
                name={props.name}
                type={props.type}
                component={InputField}
                options={{
                    defaultValue: props.value,
                    placeholder: props.placeholder,
                    style: props.style,
                    onInputChange: props.onInputChange
                }}
            />
        </FormGroup>
    </div>
)

FormInputContainer.propTypes = {
    valueLink: PropTypes.object,
}

FormInputContainer.defaultProps = {
    valueLink: null,
}

export default FormInputContainer;
