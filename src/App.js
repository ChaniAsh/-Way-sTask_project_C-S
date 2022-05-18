import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';
import Warning from './Components/Warning';

function App() {
  return (
    <div className="App">
      {/* <img src={'/public/webgl.png'}/> */}
      <BrowserRouter>
      <br></br>
      <br></br>
       {/* <Warning/> */}
       <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
