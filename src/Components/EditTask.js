import { useNavigate } from 'react-router-dom'
import React from 'react'
import Form from './Form'
// import FormMDB from './FormMDB'
import Button from '@mui/material/Button';
import Nav from '../nav.js'

export default function EditTask() {

    const navigate = useNavigate();
    return (
        <div>
            <Nav />
            <div className="newTask">
                <h1>עריכת משימה✏️</h1>
                <div id='form'>
                    <Form />
                    {/* <FormMDB/> */}
                </div>
                <br></br>
                <div id='buttons'>
                <Button variant="outlined" onClick={() => navigate('/position')}>קבע מיקום</Button>
                </div>
            </div>
        </div>
    )
}
