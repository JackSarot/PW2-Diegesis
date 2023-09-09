import React from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginSesion.css'

export const LoginSesion = () => {

  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <div className='login-box'>

        <h1>Iniciar Sesion- Diegesis</h1>

        <img className='avatar' src="https://cdn-icons-png.flaticon.com/256/4776/4776023.png" alt="" />

<form>

<label for="username">Usuario</label>
<input type="text" placeholder="Usuario" required minLength={2} maxLength={20}></input>


<label for="password">Contraseña</label>
<input type="password" placeholder="Password" required minLength={3} maxLength={8}></input>

<input type="submit" value="Iniciar Sesion"></input>

<button onClick={handleClick}>Inicio Sesion</button>


<a href="/componentes/Registro">¿No tienes cuenta? Registrate</a>
</form>
       
   
    </div>
  )
}
