import React from 'react'
 import List from './List'
 import Nav from '../nav'

export default function SaveTask() {
    return(
        <div>
        {/* <div id='logoPage'></div> */}
        <Nav/>
        <div id='tasks'>
        <List></List> 
        </div>
        </div>
    )
}
