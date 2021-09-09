//CONSTANTS 
const initialState = {
    tasks: []   
}

//TYPES
const SET_TASKS = "SET_TASKS"

//REDUCER
export default function tasksReducer  (state = initialState, action)  {
switch (action.type) {
    case SET_TASKS:
        return {...state, tasks: action.payload}
    default:
        return {...state}; 
}
}


//ACTIONS
export const setTask = (task) => async (dispatch,getState) => {
try {   
    //add a task to the current state
    let {tasks} = getState().tasks; 
    dispatch({
        type: SET_TASKS, 
        payload: [...tasks,task]
    })  
    //also save it in local storage
    localStorage.setItem("taskList", JSON.stringify([...tasks,task]))
} catch (error) {
    console.log(error);
}
}

export const setTaskList = (tasks) => async (dispatch) => {
    try {   
        //sets the task list when the app is rendered
        dispatch({
            type: SET_TASKS, 
            payload: tasks
        }) 
    } catch (error) {
        console.log(error);
    }
    }
    
export const editTask  = (task,checked) => async (dispatch,getState) => {
    try {   
        let {tasks} = getState().tasks;  
        //if the task in the array equals the task recieved by props it will change the completed state
        const editedTasks = tasks.map(item => item.text === task ? {...item,completed: checked} : item); 
        dispatch({
            type: SET_TASKS, 
            payload: editedTasks
        })
        localStorage.setItem("taskList", JSON.stringify(editedTasks))
    } catch (error) {
        console.log(error);
    }
    }
    