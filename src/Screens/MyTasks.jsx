import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Box, Typography,Button, } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/es'; 
import { setTask } from '../Redux/TasksDuck';
import { useSelector } from 'react-redux';
import { Warning } from '@material-ui/icons';
import TaskItem from '../Components/TaskItem';
import StyledInput from '../Components/StyledInput';
import BoxContainer from '../Components/BoxContainer';

const MyTasks = (props) => {

    const dispatch = useDispatch();  
    const {tasks} = useSelector(store => store.tasks)  

    //use of HOOKS 
    const [taskText,setTaskText] = React.useState(""); 
    const [dueDate,setDueDate] = React.useState(moment().format("YYYY-MM-DD"));  
    const [error,setError] = React.useState(false)

    const addTask = (e) => { 
        e.preventDefault();  
        //if the user has filled up the field
        if(taskText.trim()){ 
            //task saved into the store and localstorage
            dispatch(setTask({text: taskText, duedate: dueDate, completed: false}));   
            //reset form values 
            setTaskText("");  
            setError(false);
            setDueDate(moment().format("YYYY-MM-DD")); 
        }else{
            setError(true); 
        }

    } 

    return (
          <Box display="flex">
            <BoxContainer title="MY TASKS">
                {tasks.map((item,index)=>(
                   <TaskItem item={item} key={index}/>
                ))}
            </BoxContainer>
            <BoxContainer title="ADD TASK">
                    <form onSubmit={addTask}> 
                    {error &&<div className="alert alert-danger d-flex justify-content-between align-items-center" 
                    role="alert">
                        <Warning/>
                        <Typography variant="caption">REQUIRED FIELD!</Typography>
                        </div>} 
                            <StyledInput     
                                value={taskText}  
                                multiline 
                                label="TASK"
                                onChange={(e) => setTaskText(e.target.value)} />    
                            <StyledInput 
                                value={dueDate} 
                                className="my-3"
                                label="DUE DATE"
                                type="date" 
                                onChange={(e) => setDueDate(e.target.value)}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                    ADD TASK
                    </Button>
                </form>
            </BoxContainer>
          </Box> 
    )
}

export default withRouter(MyTasks)
