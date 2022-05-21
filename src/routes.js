import {Routes,Route} from 'react-router-dom'
import Home from './Components/home/Home.js'
import NewTask from './Components/NewTask.js'
import SaveTask from './Components/SaveTask'
import Position from './Components/Position'
import EditPosition from './Components/EditPosition.js'
import Warning from './Components/Warning'
import Map from './Components/GoogleMaps' 
import BGroup from './Components/ButtonGroupTask'
import EditTask from './Components/EditTask'

export default ()=>{

    return(
        <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='newTask' element={<NewTask/>}/>
        <Route path='saveTask' element={<SaveTask/>}/>
        <Route path='position' element={<Position/>}/>
        <Route path='editPosition' element={<EditPosition/>}/>
        <Route path='warning' element={<Warning/>}/>
        <Route path='map' element={<Map/>}/>
        <Route path='group' element={<BGroup/>}/>
        <Route path='editTask' element={<EditTask/>}/>
    </Routes>
    )
    
}