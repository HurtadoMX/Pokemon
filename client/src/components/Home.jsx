import React, { Fragment } from "react";

//importamos nuestros hooks
import { useState, useEffect } from "react";

//el useSelector nos permite extraer datos del store de redux utilizando una funcion selectora
//esta debe ser pura ya que potencialmente invocada multiples veces
import {useDispatch, useSelector} from 'react-redux'

//importo mi funcion del action
import { deleteDetail, getPokemons, orderByName, filterByType, filterByCreated, getTypes, filterByAtaque, filterByVida, filterByDefensa, filterByVelocidad, filterByAltura, filterByPeso } from "../actions";

import { Link } from "react-router-dom";

//importo mis componentes
import Card from "./Card";
import Paginado from "./Paginado";

import Navbar from "./NavBar";

//estilos
import style from "./styles/Home.module.css"
import SideMenu from "./SideMenu";
import fotoPoke from "../assets/pokemon.jpg"
import logo from "../assets/detalle2.png"





export default function Home(){




    //declaro mi constante dispatch, para mis hooks aqui uso el hook useDispatch
    //esta constante se usa para dispachiar mis acciones, es decir retorna la funcion dispatch del amacen de redux con la cual se emiten las acciones
    const dispatch= useDispatch()
    

    //y es aqui donde usamos el hook useSelector. Esta funcion sera invocada con el esto del amacen en redux como su unico argumento
    //Este se ejecutara en cada render del componente funcional y cada vez que se emita una accion tambien se ejecutara esta funcion selectora
    //en este caso es como decir que en la constante allPokemons me traiga todo lo que tiene en el estado pokemons
    const todoPokemons = useSelector((state)=>state.pokemons)
   

    //paginado
  const [orderCreate, setOrderCreate] = useState("");   
    const [currentPage, setCurrentPage] =  useState(1)
    const [orden, setOrden]= useState('')
    const[pokemonsPerPage, setPokemonsPerPage]= useState(12)
    const indiceUltimoPokemon = currentPage * pokemonsPerPage//en un principio son 6
    const indicePrimerPokemon = indiceUltimoPokemon - pokemonsPerPage// esto nos da 0
    const currentPokemons = todoPokemons.slice(
        indicePrimerPokemon,
        indiceUltimoPokemon
      );
     

    //hago mis hooks de mi select de mis filtrados


    const paginado = (pageNumber)=>{
    setCurrentPage(pageNumber)
    }

    //ahora vamos a traernos del estado los pokemones cuando todo se monta, usando useEffect
    useEffect(()=>{
        //despacho esa accion
        dispatch(getPokemons())
        
    //lo que se incluye en el arreglo es de lo que depende el componente, por ejemplo en este caso
    //tengo el dispatch entonces puedo decirle que se monte siempre y cuando tenga el dispatch
    //es decir el arreglo es como una dependencia, mientras se tenga lo que dice el arreglo hara algo, si esta vacio
    //el dispatch se ejecuta sin problema y sin depender de nadie
    },[dispatch])

 
    // function handleDelete(e){
    //     e.preventDefault()
    //     dispatch(deleteDetail(e.target.value))
    //     alert("Eliminado")
    //     navigate("/home")

    //   }

    
    

//  if(!todoPokemons?.length ){
//    dispatch(getPokemons())
//    return( 
//    <div className={style.bodyHomePrincipal}>
//    <img src={logo} className={style.logo_imagen}></img>
//     <div className={style.loaderHomePrincipal}>
//       <span className={style.span}></span>
//       <span className={style.span}></span>
//       <span className={style.span}></span>
//     </div>
//   </div>)
//  }
    
    return (
      <div className={style.body}>
        <div className={style.contain}>
          <Navbar />

          {/* aqui van a ir mis filtros */}
          <div>
          
          
            <SideMenu 
            setOrderCreate = {setOrderCreate}
            setOrden={setOrden}
            setCurrentPage={setCurrentPage}
             />
            {/* <SideBar/> */}

            {/* //renderizo el paginado */}
            <Paginado
              key={todoPokemons.length}
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={todoPokemons.length}
              paginado={paginado}
            />
            <div className={style.wrapper}>
              {currentPokemons.length > 0 ? (
                currentPokemons.map((e) => {
                  return (
                    <div key={e.id}>
                    
                      <Link to={"/home/" + e.id}>
                        <Card
                          img={e.imagen}
                          name={e.nombre}
                          types={e.types.join(" - ")}
                          ataque={e.ataque}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className={style.bodyHome}>
                  <div className={style.loaderHome}>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                  </div>
                </div>
              )}
            </div>

          </div>
          {/* <img src={fotoPoke} alt="not found" className={style.imagenPoke}/> */}
        </div>
      </div>
    );

    
    

}
