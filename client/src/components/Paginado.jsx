//intentaremos hacer todo el pagiando junto con su logica aqui
//importamos
import React from "react";
import style from "./styles/paginado.module.css"

// //importamos nuestros hooks
// import { useState, useEffect } from "react";

// //el useSelector nos permite extraer datos del store de redux utilizando una funcion selectora
// //esta debe ser pura ya que potencialmente invocada multiples veces
// import {useDispatch, useSelector} from 'react-redux'

// //importo mi funcion del action
// import { getPokemons } from "../actions";

// import { Link } from "react-router-dom";



//nuestros hooks
export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = [];

    //calculo cantidad de paginas y pusheo el resultado
    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
    <div className={style.cont}>
      <ul className={style.lista}>
        
          {pageNumbers &&
            pageNumbers.map((number) => {
              return (
                <div key={number} className={style.divDentro}>
                  
                  <a className={style.aCont} onClick={() => paginado(number)}>
                    {number}
                  </a>
                 
                </div>
              );
            })}
        
        </ul>
        </div>
      
    );


}


//funcion y logica