import { TextField } from '@material-ui/core'
import React from 'react'

const FormikStyledInput = ({id,label, formik,...rest}) => {
    return (
        <TextField 
        className="my-3"
        fullWidth
        id={id}
        name={id}
        label={label}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        onChange={formik.handleChange}
        error={formik.touched[id] && Boolean(formik.errors[id])}
        helperText={formik.touched[id] && formik.errors[id]}
        {...rest}
        />
    )
}

export default FormikStyledInput
