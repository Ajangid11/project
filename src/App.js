import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Hooks from './Components/Hooks';
import Form from './Components/Form';
// import Enquiry from './Components/Enquiry';





function App() {

  
  return (

    <div>
    <Home/>
    <Hooks/>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Form' element={<Form/>}></Route>   
      </Routes>

    </div>
  );
}

export default App;
