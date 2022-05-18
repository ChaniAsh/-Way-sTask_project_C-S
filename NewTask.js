import {useNavigate} from 'react-router-dom'
import React from 'react'
import Form from './Form'
import Button from '@mui/material/Button';
import Nav from '../nav.js'

export default function NewTask(){
    
    const navigate=useNavigate();
    return(
        <div>
            <Nav/>
        <div className="newTask">
            <h1>משימה חדשה</h1>
            <Form/>
            <br></br>
            <Button variant="outlined" onClick={() => navigate('/position')}>קבע מיקום</Button>
        </div>
        </div>
    )
}
