import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector,useDispatch } from 'react-redux';
import { logOut } from '../Redux/UserDuck';
import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar, 
    title: { 
        flexGrow: 1
    }, 
    appbar: {
       backgroundColor: theme.palette.dark.main
    }
}))
 
const Navbar = (props) => { 

    const classes = useStyles(); 

    const dispatch = useDispatch(); 
    const {user} = useSelector(store => store.loggedUser) 

    const log_out = () => {
        dispatch(logOut()); 
        props.history.push("/"); 
    }

    return ( 
        <div>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar> 
            <Typography variant="h6" className={classes.title}>
                TO DO APP
            </Typography>  
            {user != null ? 
            <Button variant="contained" color="primary" onClick={()=>log_out() }>
              LOG OUT
            </Button> 
            : 
                <Typography variant="h6" color="primary">LOGIN</Typography>
                }
          </Toolbar>  
        </AppBar> 
        <div className={classes.offset}/>
        </div>
    )
}

export default withRouter(Navbar)
