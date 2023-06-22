
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CreateUser from './Components/Forms/CreateUser';
import User from './Components/Users/User';
import EditUser from './Components/Modals/EditUser';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { UserState } from './Components/Context/UserState';
function App() {
  return (
    <div className="App">
      <UserState>

        <Navbar/>
        <User/>
      {/* <Router basename={window.}>
     <Navbar/>
     <Routes>
      <Route path='/' element={<CreateUser/>}/> 
       {/* <Route path='' element={<User/>}/>  
      
    
     </Routes>
     </Router> */}
     </UserState>
    </div>

  );
}

export default App;
