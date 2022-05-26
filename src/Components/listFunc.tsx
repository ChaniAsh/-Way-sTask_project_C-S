import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { task } from '../Classes/Tasks';
import List from './List.js';


export default function ListFunc() {
  // let arrTask: task[] = [];
  const[arr,setTask]=useState([])

  useEffect(() => {
      if(arr.length==0)
      axios.get("https://localhost:44364/api/tasks/getAllTasks").then((data) => {
          setTask(data.data);

      });
  })
  return(
       <List list={arr}/>
  )
}