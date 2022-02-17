import React, { Fragment } from "react";
import style from "./styles/SideMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getPokemons,
  orderByName,
  filterByType,
  filterByCreated,
  getTypes,
  filterByAtaque,
  filterByVida,
  filterByDefensa,
  filterByVelocidad,
  filterByAltura,
  filterByPeso,
} from "../actions";
import foto from "../assets/foto.jpg";
import ordenamiento from "../assets/ordenamiento.png";
import creados from "../assets/creados.png";
import ataque from "../assets/ataque.png";
import vida from "../assets/vida.png";
import defensa from "../assets/defensa.png";
import velocidad from "../assets/velocidad.png";
import altura from "../assets/altura.png";
import peso from "../assets/peso.png";
import poderes from "../assets/types.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import logo from "../assets/detalle2.png"


export default function SideBar({setOrderCreate, setOrden, setCurrentPage}) {
  const dispatch = useDispatch();

  // const allPokemons = useSelector((state)=>state.pokemons)
  const allTypes = useSelector((state) => state.types);


  const [orderAtaque, setOrderAtaque] = useState("");
  const [ordervida, setOrderVida] = useState("");
  const [orderDefensa, setOrderDefensa] = useState("");
  const [orderVelocidad, setOrderVelocidad] = useState("");
  const [orderAltura, setOrderAltura] = useState("");
  const [orderPeso, setOrderPeso] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  

  function handleFilterCreate(e) {
    e.preventDefault();

    dispatch(filterByCreated(e.target.value))
    setCurrentPage(1);
    setOrden(`orderAtaque ${e.target.value}`);
    // dispatch(filterByCreated(e.target.value));
  }

  //funcion para el select que ordena alfabeticamente
  function handleOrder(e) {
    e.preventDefault();
    

    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`orderAtaque ${e.target.value}`);
  }

  //funcion para el select que filtra por types
  function handleFilterTypes(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  }

  //funcion para el select que filtra por ataque
  function handleFilterAtaque(e) {
    e.preventDefault();
    dispatch(filterByAtaque(e.target.value));
    setCurrentPage(1);
    setOrden(`orderAtaque ${e.target.value}`);
  }

  //funcion para el select que filtra por vida
  function handleFilterVida(e) {
    e.preventDefault();
    dispatch(filterByVida(e.target.value));
    setCurrentPage(1);
    setOrderVida(`Sorted ${e.target.value}`);
  }
  //funcion para el select que filtra por defensa
  function handleFilterDefensa(e) {
    e.preventDefault();
    dispatch(filterByDefensa(e.target.value));
    setCurrentPage(1);
    setOrderDefensa(`Sorted ${e.target.value}`);
  }
  //funcion para el select que filtra por velocidad
  function handleFilterVelocidad(e) {
    e.preventDefault();
    dispatch(filterByVelocidad(e.target.value));
    setCurrentPage(1);
    setOrderVelocidad(`Sorted ${e.target.value}`);
  }
  //funcion para el select que filtra por altura
  function handleFilterAltura(e) {
    e.preventDefault();
    dispatch(filterByAltura(e.target.value));
    setCurrentPage(1);
    setOrderAltura(`Sorted ${e.target.value}`);
  }
  //funcion para el select que filtra por peso
  function handleFilterPeso(e) {
    e.preventDefault();
    dispatch(filterByPeso(e.target.value));
    setCurrentPage(1);
    setOrderPeso(`Sorted ${e.target.value}`);
  }

  //hacemos nuestro handleClick para nuestro boton
  //a esta funcion le paso un evento
  function handleClick(e) {
    //para que no se rompa
    e.preventDefault();
    //este dispatch me trae la accion que me trae todo los pokemons, me resetea todo y me lo deja como el estado inicial.
    dispatch(getPokemons());
  }
  // if(getPokemons.length = 0){
  //   dispatch(getPokemons())
  //   return( 

  //     <p>CARGANDO</p>
  // //   <div className={style.bodyHomePrincipal}>
  // //   <img src={logo} className={style.logo_imagen}></img>
  // //    <div className={style.loaderHomePrincipal}>
  // //      <span className={style.span}></span>
  // //      <span className={style.span}></span>
  // //      <span className={style.span}></span>
  // //    </div>
  // //  </div>
  //  )
  // }


  return (
    <Fragment>
      <div id={style.port}>
        <div id={style.sidemenu}>
          
          {/* {/* // cabecera * */}
          
          {/* {/* // imagen de perfil  */}
          {/* <div id={style.profile}>
            <div id={style.photo}>
              <img src={foto} alt="" width="50px" height="50px" />{" "}
            </div>
            <div id={style.name}>
              <span>Manuel Hurtado</span>
            </div>
          </div> */}

          {/* {/* // filtro  */}
          <div id={style.menu_items}>
            <div className={style.item}>
              <div></div>
              <br />
              <img src={logo} className={style.logo_imagen}></img>
              <br />
              <br />
              <Link className={style.ala} to="/pokemon">Crear personaje</Link>
              <br />
              <button className={style.btn}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                RECARGAR PERSONAJES
              </button>
            </div>

            <div className={style.item_separator}></div>

            <div className={style.item}>
              {/* {/* <h2>ORDENAMIENTO</h2>  */}

              

              
{/* <-----------------------------------------------------------------------------------------------> */}
                {/* SELECT PARA ORDENAMIENTO */}
                <div className={style.select}>
                <img className={style.icon} src={ordenamiento} alt="" />

                <select
                  className={style.selectt}
                  onChange={(e) => handleOrder(e)}
                 >
                  {/* siempre es necesario poner un value a todas las option */}
                  <option value="ALL">ORDENAR ALFABETICAMENTE</option>
                  <option value="ASCENDENTE">A-Z</option>
                  <option value="DESCENDENTE">Z-A</option>
                </select>
                </div>
{/* <-----------------------------------------------------------------------------------------------> */}

              
            </div>

            <div className={style.item_separator}></div>

            <div className={style.item}>
              {/* {/* <h2>FILTROS</h2> * */}

              

              <div className={style.select}>
{/* <-----------------------------------------------------------------------------------------------> */}

                {/* SELECT PARA CREADOS/EXISTENTES */}
                <div className={style.select}>       
                <img className={style.icon} src={creados} alt="" />

                <select
                  className={style.selectt}
                  onChange={(e) => handleFilterCreate(e)}
                  name="format"
                  id={style.format}
                  >
                  {/* siempre es necesario poner un value a todas las option */}
                  <option value="ALL">CREADOS/EXISTENTES</option>
                  <option value="CREADOS">CREADOS</option>
                  <option value="EXISTENTES">EXISTENTES</option>
                </select>
                  </div>

{/* <-----------------------------------------------------------------------------------------------> */}

              </div>
            </div>

            <div className={style.item}>
            <br />
{/* <-----------------------------------------------------------------------------------------------> */}

              {/* SELECT PARA ATAQUE */}
              <div className={style.select}>
              <img className={style.icon} src={ataque} alt="" />

              <select onChange={(e) => handleFilterAtaque(e)}   className={style.selectt}>
                {/* siempre es necesario poner un value a todas las option */}
                <option value="">POR ATAQUE</option>
                <option value="asc">MAS PODEROSO AL MAS DEBIL</option>
                <option value="desc">MAS DEBIL AL MAS PODEROSO</option>
              </select>
              </div>

{/* <-----------------------------------------------------------------------------------------------> */}

            </div>

            <div className={style.item}>
              
              <br />
{/* <-----------------------------------------------------------------------------------------------> */}

              {/* SELECT PARA VIDA */}
              <div className={style.select}>
              <img  className={style.icon} src={vida} alt="" />

              <select onChange={(e) => handleFilterVida(e)} className={style.selectt}>
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">POR VIDA</option>
                <option value="DESCENDENTE">MAYOR VIDA A MENOR VIDA</option>
                <option value="ASCENDENTE">MENOR VIDA A MAYOR VIDA</option>
              </select>
              </div>

{/* <-----------------------------------------------------------------------------------------------> */}

            </div>

            <div className={style.item}>
              
              <br />
{/* <-----------------------------------------------------------------------------------------------> */}

              {/* SELECT PARA DEFENSA */}
              <div className={style.select}>
              <img className={style.icon} src={defensa} alt="" />

              <select onChange={(e) => handleFilterDefensa(e)} className={style.selectt}>
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">POR DEFENSA</option>
                <option value="DESCENDENTE">MEJOR DEFENSA A PEOR DEFENSA</option>
                <option value="ASCENDENTE">PEOR DEFENSA A MEJOR DEFENSA</option>
              </select>
              </div>

{/* <-----------------------------------------------------------------------------------------------> */}

            </div>

            <div className={style.item}>

              <br />
{/* <-----------------------------------------------------------------------------------------------> */}

              {/* SELECT PARA VELOCIDAD */}
              <div className={style.select}>
              <img className={style.icon} src={velocidad} alt="" />
              <select onChange={(e) => handleFilterVelocidad(e)} className={style.selectt}>
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">POR VELOCIDAD</option>
                <option value="DESCENDENTE">MAS VELOZ AL MAS LENTO</option>
                <option value="ASCENDENTE">MAS LENTO AL MAS VELOZ</option>
              </select>
              </div>

{/* <-----------------------------------------------------------------------------------------------> */}
            </div>

            <div className={style.item}>
             
              <br />
{/* <-----------------------------------------------------------------------------------------------> */}
              {/* SELECT PARA ALTURA  */}
              <div className={style.select}>
              <img  className={style.icon} src={altura} alt="" />
              <select onChange={(e) => handleFilterAltura(e)} className={style.selectt}>
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">POR ALTURA</option>
                <option value="DESCENDENTE">MAS ALTO AL MAS BAJITO</option>
                <option value="ASCENDENTE">MAS BAJITO AL MAS ALTO</option>
              </select>
              </div>

{/* <-----------------------------------------------------------------------------------------------> */}

            </div>

            <div className={style.item}>
              
              
              <br />
{/* <-----------------------------------------------------------------------------------------------> */}
              {/* SELECT PARA PESO */}
              <div className={style.select}>
              <img className={style.icon} src={peso}/>
              <select onChange={(e) => handleFilterPeso(e)} className={style.selectt}>
              
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">  POR PESO</option>
                <option value="DESCENDENTE">MAYOR PESO A MENOR PESO</option>
                <option value="ASCENDENTE">MENOR PESO A MAYOR PESO</option>
              </select>
              </div>
{/* <-----------------------------------------------------------------------------------------------> */}

            </div>

            <div className={style.item}>
              
              <br />
{/* <-----------------------------------------------------------------------------------------------> */}

              {/* SELECT PARA TYPES */}
              <div className={style.select}>
                
              <img className={style.icon} src={poderes} alt="" />
              
              <select onChange={(e) => handleFilterTypes(e)} className={style.selectt}>
                <option value="ALL">FILTRA POR PODERES</option>
                {allTypes.map((e) => {
                  {/* {console.log(e.id)} */}
                  return (
                   
                    
                    <option  key={e.id} value={e.name}>
                      {e.name}
                    </option>
                   
                  );
                })}
              </select>
              </div>
{/* <-----------------------------------------------------------------------------------------------> */}

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
