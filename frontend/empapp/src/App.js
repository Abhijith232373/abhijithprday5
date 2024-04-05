import logo from './logo.svg';

import './App.css';

import Navbar from './components/Navbar';





import { Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ViewEmpolyee from './components/ViewEmpolyee';



function App() {

 return (

   <div className="App">

<Navbar/>

   <Routes>

     <Route path='/' element={<ViewEmpolyee/>}/>

     <Route path='/add' element={<AddEmployee/>} />

   </Routes>

   </div>

 );

}


export default App;


