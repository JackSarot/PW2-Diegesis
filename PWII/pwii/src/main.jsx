import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Index from './pages';
import SignUp from './pages/signup';
import Inicio from './pages/inicio';
import FavoritosHistorias from './pages/favoritos.historias';
import FavoritosAutores from './pages/favoritos.autores';
import Perfil from './pages/perfil';
import CrearHistoria from './pages/crear.historia';
import Historia from './pages/historia';
import Evento from './pages/evento';
import Consejos from './pages/consejos';

const router = createBrowserRouter([
    { path: '', element: <Index /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/inicio', element: <Inicio /> },
    { path: '/favoritos/historias', element: <FavoritosHistorias /> },
    { path: '/favoritos/autores', element: <FavoritosAutores /> },
    { path: '/perfil/:id', element: <Perfil /> },
    { path: '/crear-historia', element: <CrearHistoria /> },
    { path: '/historia/:slug', element: <Historia /> },
    { path: '/evento', element: <Evento /> },
    { path: '/consejos', element: <Consejos /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
