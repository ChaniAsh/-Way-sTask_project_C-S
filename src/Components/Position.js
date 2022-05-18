import { useNavigate } from 'react-router-dom'
import React from 'react'
import Button from '@mui/material/Button';
import Nav from '../nav.js'
import List from './ListPosition'


export default function Position() {
    const navigate = useNavigate();
    return (
        <div>
            <Nav />
            <div className="position">
                <div id='listPosition'>
                    <List></List>
                </div>
                <br/>
                <div id='buttons'>
                <Button  variant="outlined" onClick={() => navigate('/editPosition')}>מיקום חדש</Button>
                </div>
            </div>
        </div>
    )
}