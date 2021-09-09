import React from 'react'
import { withRouter } from 'react-router';
import { Box, Typography } from '@material-ui/core';
import { NoteAdd,ViewStream } from '@material-ui/icons';

const BoxContainer = (props) => {

    return (
            <Box 
                flex={1} 
                color="primary.dark" 
                bgcolor="primary.light" 
                m={2} 
                p={2} 
                borderRadius={10} 
                boxShadow={5} 
                letterSpacing={6} 
                borderColor="primary.dark">  
                    <Box   display="flex" justifyContent="center" alignItems="center" mb={3} > 
                        {props.title !== "MY TASKS" ? <NoteAdd/> : <ViewStream/>}
                        <Typography variant="h5" align="center"  color="primary">{props.title}</Typography>  
                    </Box>
                    {props.children}
            </Box>
    )
}

export default withRouter(BoxContainer)
