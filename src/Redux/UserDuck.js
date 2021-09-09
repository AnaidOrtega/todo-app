

//CONSTANTS 
    const initialState = {
        user: null   
    }

//TYPES
const LOGGED_USER = "LOGGED_USER"

//REDUCER
export default function userReducer  (state = initialState, action)  {
    switch (action.type) {
        case LOGGED_USER:
            return {...state, user: action.payload}
        default:
            return {...state}; 
    }
}


//ACTIONS
export const setUser = (user) => async (dispatch) => {
    try {   

        /* SIMULATED POST API REQUEST
        axios.post('/users', user).then(response => {
            console.log(response);
            // if the status code is 200 
                    dispatch({
            type: LOGGED_USER, 
            payload: user
        }) 
        localStorage.setItem("loggedUser", JSON.stringify(user));
        }).catch(e => {
            console.log(e);
        });
        */

        dispatch({
            type: LOGGED_USER, 
            payload: user
        }) 
        localStorage.setItem("loggedUser", JSON.stringify(user)); 
    } catch (error) {
        console.log(error);
    }
}

export const logOut = () => async (dispatch) => {
    try {  
        dispatch({
            type: LOGGED_USER, 
            payload: null
        }) 
        localStorage.clear(); 
    } catch (error) {
        console.log(error);
    }
}