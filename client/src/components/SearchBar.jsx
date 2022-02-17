//IMPORTAMOS TODO LO NECESARIO PARA LA SEARCH BAR
//importamos react
import React from "react";
//importamos nuestro hook useState para el estado local del componente
import { useState } from "react";
//importamos un hook para renderizar del dispatch
import { useDispatch } from "react-redux";
//importo mi action que me ayuda a traerme los pokemons por nombre
import { searchBar } from "../actions";

import "./styles/SearchBar.css"

export default function SearchBar(){
    const dispatch = useDispatch()

    //creo mi hook para mi estado
    const [name, setName] = useState("")


    //creo una funcion para el cambio de mi input
    function handleInput(e){
        e.preventDefault()

        //le seteo lo que el usuario escribe en el input
        setName(e.target.value)

    }

    //creo una funcion para mi boton sobre que va a hacer cuando de click

    function handleClick(e){
        e.preventDefault()
        if(name=== "") alert ("Para buscar debes ingresar un nombre")
        //este dispatch va a hacer el llamado a la accion y le pasara el name que tengo en el input
        dispatch(searchBar(name))

        //por ultimo limpio mi input
        document.getElementById("prueba").value = "";
    }



    return(
        <div>
            <input 
            autoComplete="off"
            className="inputt"
              id="prueba"
               key='search'
        type= 'text'
        placeholder = 'Buscar Pokemon...'
        onChange = {(e) => handleInput(e)}/>
                

        <button className="btnn" type='submit' onClick={(e) => handleClick(e)}>Buscar</button>  

        </div>
    )
}