
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import User from './Components/Users/User';
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
