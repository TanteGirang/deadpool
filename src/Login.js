import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'     

export default function Login() {
    return (
        <div className='Login'>
        <div className="LoginContainer">
        
            <label> 
                Username :
            </label>
            <input/>
            <label> 
                 Password :   
            </label>
            <input/> 
            <button>
                Sign In
            </button>
            <Button variant='contained' color='primary' style={{marginTop: "20px"}}>Forget Password</Button>
            </div>
        </div>
    )
}
