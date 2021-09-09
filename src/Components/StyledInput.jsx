import { TextField } from '@material-ui/core'
import React from 'react'

const StyledInput = ({value,label,onChange,...rest}) => {
    return (
      <TextField  
          fullWidth
          id={label}
          name={label} 
          variant="filled" 
          label="TASK"  
          value={value}
          onChange={onChange}  
          {...rest}
      />
    )
}

export default StyledInput
