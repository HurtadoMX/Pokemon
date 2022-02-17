import React, { Fragment } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getPokemons } from "../actions";
import Home from "./Home";

//estilos
import style from "./styles/LandingPage.module.css"
import foto from "../assets/poke.png"
import fotoFondo from "../assets/ok.jpg"
import logo from "../assets/logo.png"
import shape from "../assets/shape.png"
import person from "../assets/xd.png"
import Card from "./Card";
// import SideBar from "./SideMenu";





export default function LandingPage(){
    const dispatch = useDispatch()



    return(
<Fragment>
       
       <div id = {style.port}>
      <div className={style.big_wrapper}>
        <img src={shape} alt="" className={style.shape} />

        <header>
          <div className={style.container}>
            <div className={style.logo}>
              <img src={logo} alt="Logo" />
              <h3 className={style.h3}>El lugar de los pokemones</h3>
            </div>

            <div className={style.links}>
              <ul>
                {/* <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li> */}
                <li><a href="#" className={style.btn}>ACERCA DE MI</a></li>
                <li><a href="/home" className={style.btn}>ENTRAR</a></li>
              </ul>
            </div>

            <div className={style.overlay}></div>

            <div className={style.hamburger_menu}>
              <div className={style.bar}></div>
            </div>
          </div>
        </header>

        <div className={style.showcase_area}>
          <div className={style.container}>
            <div className={style.left}>
              <div className={style.big_title}>
                <h1>PokeDex</h1>
                <h1>"Explora Pokemones"</h1>
              </div>
              <p className={style.text}>
               Sitio web creado con el fin de recolectar y enseñar informacion de pokemones con el fin de aprender mas de ellos
              </p>
              <div className={style.cta}>
                <a href="/home" className={style.btn}>VAMOS!</a>
              </div>
            </div>

            <div className={style.right}>
              <img src={person} alt="Person Image" className={style.person}/>
            </div>
          </div>
        </div>

        <div className={style.bottom_area}>
          <div className={style.container}>
            <button className={style.toggle_btn}>
              
            </button>
          </div>
        </div>
      </div>
   



      
           
           </div>    
           </Fragment>  
    )
}