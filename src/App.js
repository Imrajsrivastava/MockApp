import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {Route,Routes} from "react-router-dom"
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
     <h1>Dashboard</h1>
     <Dashboard/>
    
     {/* <Routes>
       <Route path='/stats' element={<Stats/>}/>
      </Routes> */}

    </div>
  );
}

export default App;
