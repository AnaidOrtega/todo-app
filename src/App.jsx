import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import Login from "./Screens/Login";
import MyTasks from "./Screens/MyTasks";
import Navbar from "./Components/NavBar";
import { setUser } from "./Redux/UserDuck";
import theme from "./Theme";
import {  setTaskList } from "./Redux/TasksDuck";

function App() { 

  const dispatch =  useDispatch(); 

  React.useEffect(()=>{ 
        //if there is an authenticated user in localstorage it will be used in the store
        if(localStorage.getItem("loggedUser")){ 
          dispatch(setUser(JSON.parse(localStorage.getItem("loggedUser")))); 
          if(localStorage.getItem("taskList")){  
            // same for the tasks list
            dispatch(setTaskList(JSON.parse(localStorage.getItem("taskList")))); 
            }
        }
    },[dispatch])

  const PrivateRoute = ({component,path, ...rest}) => {
    if(localStorage.getItem("loggedUser")){
        return  <Route component={component} path={path} {...rest}/> 
    }else{ 
      //if there is no authenticated user it will be redirected to login
      return <Redirect to="/" exact/>
    }
}

  return ( 
    <ThemeProvider theme={theme}> 
    <BrowserRouter>
      <Navbar/>  
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/tasks"  component={ MyTasks } />
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
