import { Typography, Button, Box } from '@material-ui/core'
import { Warning } from '@material-ui/icons';
import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { setUser } from '../Redux/UserDuck';
import FormikStyledInput from '../Components/FormikStyledInput';

const hardcodedUser = {
    email: "email@gmail.com", 
    password: "password123"
}

const Login = (props) => {    
    
    const dispatch = useDispatch();  

    const [error,setError] = React.useState(null); 

    React.useEffect(()=>{ 
        //if the user is atuthenticated  
        if(localStorage.getItem("loggedUser")){   
            //automatically redirect to tasks
            props.history.push("/tasks"); 
        }
    },[props,dispatch])

    const Login = (values) => { 
        if(values.email === hardcodedUser.email && values.password === hardcodedUser.password){   
            //saves the user into the store and local storage
            dispatch(setUser(values)); 
            //automatically redirect to tasks
            props.history.push("/tasks");   
        }else{
            setError(true); 
        }
    }  

    const validate = (values) => {
        const errors = {};
                if (!values.email) {
                     errors.email = 'REQUIRED FIELD';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                     errors.email = 'INVALID EMAIL';
                }
                if (!values.password) {
                    errors.password = 'REQUIRED FIELD';
                } 
                return errors;
    }

    return (
        <div className="container pt-5"> 
        <Box bgcolor="primary.light" borderRadius={10} boxShadow={10} p={5}>
            <Typography variant="h2" align="center"  color="primary">INGRESAR</Typography> 
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => validate(values)}
            onSubmit={(values) => {
                Login(values)
            }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}> 
                            {error &&<div className="alert alert-danger d-flex justify-content-between align-items-center" 
                    role="alert">
                        <Warning/>
                        <Typography variant="caption">EMAIL: email@gmail.com,PASS: password123</Typography>
                        </div>} 
                    <FormikStyledInput
                        id="email"
                        label="Email"
                        formik={formik}
                    />
                       <FormikStyledInput
                        id="password"
                        label="Password"
                        formik={formik} 
                        type="password"
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                    INICIAR SESIÓN
                    </Button>
                </form>
                )}
            </Formik>
            </Box>
        </div>
    )
}

export default withRouter(Login)
