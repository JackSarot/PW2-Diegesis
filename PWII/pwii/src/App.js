import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import { iniciarsesion } from './componentes/iniciarsesion/iniciarsesion';
import { LoginSesion } from './componentes/LoginSesion';
import { RegistrarUsuario } from './componentes/RegistrarUsuario';

import Home from './componentes/Home';

 //<div className="App"> <Hello Wordl/> </div>
function App() {
  return (
    <BrowserRouter basename='/app'>
    <Routes>
    
    <Route path="/" Component={<Home/>}/>  

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
