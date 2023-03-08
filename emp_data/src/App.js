
import './App.css';
import AddEmpData from './components/AddEmpData';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Editemp from './components/Editemp';



function App() {
  return (
  <div>
      
  <Navbar></Navbar>   
  <Routes>
  <Route path= '/' element={<Home/>}></Route>
  <Route path= '/AddEmpdata' element={<AddEmpData/>}></Route>
  <Route path= '/editemp/:id' element={<Editemp/>}></Route>
  </Routes>
    </div>
  );
};

export default App;
