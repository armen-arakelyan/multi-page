import React,{useState} from 'react';
import Login from './Login'
import RegisterForm from './Register';

export default function Register(props){
    const [isClosedReg,setReg]=useState(true);
    const [isClosedLog,setLog]=useState(false);
    const [logDisplay,setLogDisplay]=useState('flex')
    const [regDisplay,setRegDisplay]=useState('none');

    return <div className="reglog">
        <div className="close_form" onClick={props.close}>
            <span>✖</span>
        </div>
            <div className="regForm">
            {isClosedLog?<span className="my_form" onClick={()=>{
                    setReg(!isClosedReg)
                    setLog(!isClosedLog)
                    setLogDisplay('flex')
                    setRegDisplay('none')
                }}>Login</span>:<span className="my_form active_form">Login</span>}
            {isClosedReg?<span className="my_form" onClick={()=>{
                    setReg(!isClosedReg)
                    setLog(!isClosedLog)
                    setLogDisplay('none')
                    setRegDisplay('flex')
                }}>Register</span>:<span className="my_form active_form">Register</span>}
            </div>
            <Login display={{display:logDisplay}}  />
            <RegisterForm display={{display:regDisplay}} />
            </div>
}