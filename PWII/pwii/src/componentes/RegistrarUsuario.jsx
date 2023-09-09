import React from 'react'

import './registrarusuario.css'

export const RegistrarUsuario = () => {
  return (
    <div className='login-box'>



<img className="avatar" src="https://cdn-icons-png.flaticon.com/256/4776/4776023.png" alt="Logo"/>
        <h1>Registrate - Diegesis</h1>


<form>
<label for="Nombres">Nombre(s)</label>
<input type="text" placeholder="Nombre(s)" required minLength={2} maxLength={20}></input>


<label for="ApellidoPaterno">Apellido Paterno</label>
<input type="text" placeholder="Apellido Paterno" required minLength={2} maxLength={10}></input>


<label for="ApellidoMaterno">Apellido Materno</label>
<input type="text" placeholder="Apellido Materno" required minLength={2} maxLength={10}></input>

<label for="Correo Electronico">Correo Electronico</label>
<input type="email" placeholder="Email" required minLength={5} maxLength={30}></input>

<div className="Otros">
<img class="Fotodeperfil" src="https://th.bing.com/th/id/OIP.S_BEyoTYNIwRpRXmQWtKJAHaHa?pid=ImgDet&rs=1" alt="Logo"/>
<label for="NombreDeUsuario">Nombre de Usuario</label>
<input type="text" placeholder="Nombre de Usuario" required minLength={2} maxLength={10}></input>


<label for="FechadeNacimiento">Fecha de Nacimiento</label>
<input type="date" name="FechadeNacimiento" required minLength={2} maxLength={8}></input>


<label for="Fotodeperfil">Foto de Perfil</label>
<input type="file" name="Fotodeperfil"></input>


<label for="Contraseña">Contraseña</label>
<input type="password" placeholder="Contraseña" required minLength={3} maxLength={8}></input>


<label for="ConfirmarContraseña">Confirmar Contraseña</label>
<input type="password" placeholder="Confirmar Contraseña" required minLength={3} maxLength={8}></input>


<input type="submit" value="Registrarse"></input>
<a href="/componentes/Login">¿Ya tienes cuenta? Inicia Sesion</a>

</div>

</form>

       
    </div>


  
  )
}
