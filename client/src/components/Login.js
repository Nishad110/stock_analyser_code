import { useEffect, useState,Fragment } from 'react'

import {Form, Button,Alert} from 'react-bootstrap'
import './Login.css';



function Login(props) {
    const [logtext, setLogtext] = useState("")
    const [pwd, setPwd] = useState()
    const [usrname, setUsrname] = useState()
    const usernamehandler = (event) => {
        setUsrname(event.target.value)
    } 
    const passwordhandler = (event) => {
        setPwd(event.target.value)
    } 
    const formSubmitHandler = () => {
        if ((usrname == 'Batman') && (pwd == 'iambatman')) {
            props.setLogin(true)
            setLogtext("")
        }
        else {
            setLogtext("Invalid Username/Password")
        }
    }    
    return (
    <div className="Login">
    <div className="login-head">Login</div>
    <Form className="form-login" onSubmit={formSubmitHandler}>
  
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="User Name" onChange={usernamehandler} value={usrname} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={passwordhandler} value={pwd}/>
    </Form.Group>
  
    <Button variant="success" type="submit">
    Log In
    </Button>
    {
    logtext.length!=0 && <Alert variant="danger" className="alert">{logtext }</Alert>       
    }
    
    </Form>       
    </div>
    
    )
 
}

export default Login;
