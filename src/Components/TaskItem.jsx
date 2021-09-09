import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Box, Typography, Card, CardContent, Checkbox } from '@material-ui/core';
import { editTask } from '../Redux/TasksDuck';

const TaskItem = ({item}) => {

    const dispatch = useDispatch(); 

    return (
            <Card className="my-2">
                <CardContent className="d-flex flex-row"> 
                    <Box flex="2" >
                    <Typography variant="h6">{item.text}</Typography>
                    <Typography variant="caption" color="secondary">DUE DATE: {item.duedate}</Typography> 
                    </Box> 
                    <Box >
                    <Checkbox
                        color="primary" 
                        checked={item.completed}
                        onChange={(e) => dispatch(editTask(item.text,e.target.checked))}
                    /> 
                    </Box>
                </CardContent>
            </Card>      
    )
}

export default withRouter(TaskItem)
