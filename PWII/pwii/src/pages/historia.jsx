/* eslint-disable no-unused-vars */
import Header from '../components/Header';
import backgroundImg from '../assets/stars.jpg';
import portadaDemo from '../assets/imageExample.jpg';
import { useState } from 'react';

function Historia() {
    const [historia, setHistoria] = useState({
        portada: '',
        title: 'Titulo de la Historia',
        autor: 'Autor',
        sinopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum orci lectus, vitae porta lorem pellentesque vel. Sed porta tincidunt suscipit.`,
        historia: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec bibendum orci lectus, vitae porta lorem pellentesque vel. 
        Sed porta tincidunt suscipit. Integer est lorem, interdum at lorem nec, 
        feugiat tempor leo. Vivamus porta felis sit amet erat egestas, 
        vitae efficitur felis cursus. Nullam finibus molestie cursus. 
        Aliquam vel dignissim erat, sit amet suscipit urna. Maecenas cursus lectus ante, 
        sed molestie ex ullamcorper at. Phasellus semper sapien ac lacinia porta. 
        Cras gravida semper pretium. Nam tincidunt dictum suscipit. 
        Quisque condimentum pharetra nibh, in feugiat odio pretium eu.


        Proin a venenatis nunc, ac elementum turpis. Nulla sit amet nisl felis. 
        Quisque in facilisis magna, et suscipit neque. Praesent pretium metus 
        eget volutpat condimentum. Nunc ligula nibh, tincidunt sit amet metus 
        eu, semper aliquam elit. Sed molestie posuere enim, at viverra eros 
        porta ut. Phasellus ut est justo. In et sapien sed nibh faucibus ornare. 
        In auctor condimentum diam, sit amet viverra sem pellentesque et. 
        Maecenas eu sollicitudin neque. Maecenas quis facilisis nisi. 
        Proin malesuada euismod est vitae pulvinar. Integer molestie, nulla eu 
        convallis suscipit, odio sapien aliquam arcu, a laoreet massa metus 
        ut nibh. Morbi vitae elementum elit, et luctus justo. Praesent maximus 
        enim in quam pulvinar efficitur. Morbi sollicitudin iaculis maximus. 
        Nam sagittis, massa sit amet suscipit iaculis, mi enim mollis magna, 
        vitae malesuada leo lacus efficitur ipsum. Ut sit amet posuere odio, 
        nec volutpat mi. Nunc convallis fringilla justo, ut maximus ligula 
        tempus sit amet. Vivamus ac ex at dui hendrerit facilisis id a leo. 
        Nunc auctor nisl sed ex molestie, a varius libero interdum. Maecenas 
        non ligula molestie, sagittis mi nec, scelerisque lorem. Duis nunc 
        nunc, congue ut fringilla ac, malesuada in sapien.`,
        isFavorite: false,
    });
    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-full flex justify-center max-h-[600px] overflow-auto">
                    <div className="w-10/12 mt-4">
                        <div className="flex justify-center">
                            <img
                                src={portadaDemo}
                                alt="Portada de Historia"
                                className="rounded h-full w-auto"
                            />
                        </div>
                        <h2 className="text-center font-bold text-white text-3xl py-2">
                            {historia.title}
                        </h2>
                        <div className="w-full flex">
                            <div className="w-6/12">
                                <input
                                    type="checkbox"
                                    name="favorito"
                                    id="favorito"
                                    checked={historia.isFavorite}
                                />
                                <label className="text-white px-2">
                                    Favorito
                                </label>
                            </div>
                            <div className="w-6/12 font-semibold text-white text-xl">
                                {historia.autor}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-medium">
                                {historia.sinopsis}
                            </h4>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-white font-normal whitespace-break-spaces text-clip bg-gray-950 rounded mt-2">
                                {historia.historia}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Historia;
