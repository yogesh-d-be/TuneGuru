// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home  from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Support from "./components/Support";
import Register from "./components/Register";
import Login from "./components/LoginModal";
import Customer from "./components/Customer";
import Mendor from "./components/Mendor";
import 'react-toastify/dist/ReactToastify.css';
// import Search from './components/search';
// import Parallax from './components/Parallax';
// import NavContext from './components/NavContext';
// import ParallaxContext from './components/ParallaxContext';

// import Para from './components/Para';
function App() {
  return (
    <div className="App">
     
    
{/* <NavContext.Provider value={Navbar}> */}

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={ <About/>}></Route>
      <Route path='/support' element={<Support/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/customer' element={<Customer/>}></Route>
      <Route path='/mendor' element={<Mendor/>}></Route>

    </Routes>
    
    {/* <Parallax/> */}
   
   {/* <Search/> */}
    {/* </NavContext.Provider> */}
    {/* <Para/> */}

    </div>
  );
}

export default App;
