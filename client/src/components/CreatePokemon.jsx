//me importo react
import React, { Fragment } from "react";
//me importo mis hooks de react
import { useEffect, useState } from "react";
//importo lo que usare de React Router Dom v6, con el useNavigate
import { useNavigate, Link } from "react-router-dom";
//importo mi accion para postear mi pokemon
import { createPokemon } from "../actions";
//importo mi accion que me trae a todos los types
import { getTypes } from "../actions";
//importo mis hooks de react-redux que necesito
import { useDispatch, useSelector } from "react-redux";
//importo mi barra de navegacion
import Navbar from "./NavBar";

import style from "./styles/CreatePokemon.module.css"

import foto from "../assets/pikachu2.png"




export default function Create(){
    //creo mi constante dispatch que me ayudara a despachar mis acciones
    const dispatch = useDispatch()
    //creo mi constante para navegar
    const navigate = useNavigate()
    //creo mi constane para seleccionar mis types de mis pokemones
    const allTypes = useSelector((state)=>state.types)

    //creo mis hook que almacenaran y setearan mis errores
    const [error, setError]= useState(false)
    const[errorValor, setErrorValor]= useState(false)
    const urlPatternValidation = (URL) => {
      const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/);
      return regex.test(URL);
    };
    const [disabled, setDisabled] = useState(true);//Estado local para desabilitar o habilitar el botón de enviar

    //creo otro hook que me limpiara mis input
    const [input, setInput]=useState({
        
    nombre: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    imagen: "",
    types: [],
    })

    function validate(input) {
      let errors = {};
      if (!input.nombre) errors.nombre = "Nombre Requerido";
      if (input.vida < 0) errors.vida = "Inválido!";
      if (input.ataque < 0) errors.ataque = "Inválido!";
      if (input.defensa < 0) errors.defensa = "Inválido!";
      if (input.velocidad < 0) errors.velocidad = "Inválido!";
      if (input.altura < 0) errors.altura = "Inválido!";
      if (input.peso < 0) errors.peso = "Inválido!";
      if (!urlPatternValidation(input.imagen) && input.imagen !== "")
        errors.imagen = "Formato no soportado";
      return errors;
    }

   

    //creo una funcion de validacion de mis input, que se ejecutara desde el form
    function handleSubmit(e){
      e.preventDefault()
if(
  input.nombre &&
  input.vida &&
  input.ataque &&
  input.defensa &&
  input.velocidad &&
  input.altura &&
  input.peso &&
  input.imagen &&
  input.types.length <= 2
){
  dispatch(createPokemon(input))
          alert("Pokemon creado")
  
          //ahora usamos nuestro hook setInput para limpiar nuestros campos
          setInput({
              nombre: "",
              vida: "",
              ataque: "",
              defensa: "",
              velocidad: "",
              altura: "",
              peso: "",
              imagen: "",
              types: []
          }) 
          navigate("/home");
}else{
  alert("COMPLETA EL FORMULARIO")
}  
    }

    //creo mi funcion que me ayudara  a meter en un arreglo todos los types que vaya seleccionando
    function handleSelect(e){
        e.preventDefault()
        // let data = e.target.value

      //  input.types.find(e=>e === data)
        if (e.target.value) {
          setInput({
            ...input,
            types: [...input.types, e.target.value], //Se agrega en un arreglo todo lo seleccionado
          });
        }
        if (!e.target.value) {
          input.types.splice(input.types.indexOf(e.target.value), 1);
          setInput({
            ...input,
          });
        }
        
    setError(
      validate({ //validamos errores
        ...input,
        [e.target.name]: e.target.value,
      })
    );
       


    }

    function handleChange(e){
      setInput({
          ...input,
          [e.target.name] :e.target.value

      })
      setError(
        validate({//validamos los errores
          ...input,
          [e.target.name]: e.target.value,
        })
      );
      
     console.log(input)
  }

    //creo una funcion para eliminar algun types que no quiera
    function handleDelete(e) {
        
        setInput({
          ...input,
          types: input.types.filter((typ) => typ !== e),
        });
      }

    //usamos el useEffect para renderizar mis types
    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])

    return(
        <Fragment>
          <Navbar/>
          <div id = {style.portada}>
          <div className={style.content}>
          <h1 className={style.logo}>POKE<span>FORM</span></h1>
          <div className={style.contact_wrapper}>
          <div className={style.contact_form}>
          <h3>Crea tu propio pokemon</h3>


        
        <div>
        {/* pongo dentro de un form para poder validar */}
        <form onSubmit={(e)=>handleSubmit(e)}>
        
       
          
           <p>
           <label>Nombre</label>
                {/* input donde ira el nombre */}
               <input             
           
           type='text'
          autoComplete="off"
           value={input.nombre} 
               name = 'nombre'
               onChange={(e) => handleChange(e)}
               />  
                {error.nombre && (
                  <p className={style.errormessage}>{error.nombre}</p>
                )}            
          
          </p>
           
{/* -------------------------------------------------------------------------- */}
           
           <p>

           {/* input donde ira la vida */}
           <label>Vida</label>
           <input
              
              
              type='number'
              min="1"
              value={input.vida}
              name = 'vida'
              onChange={(e) => handleChange(e)}
               /> {error.vida && (
                  <p className={style.errormessage}>{error.vida}</p>
                )} 
         
          </p>
           
{/* -------------------------------------------------------------------------- */}
           
          <p>

                {/* input donde ira el ataque */}
                <label>Ataque</label>
           <input 
               type='number'
               min="1"
               value={input.ataque}
               name = 'ataque'
               onChange={(e) => handleChange(e)}
               /> 
               {error.ataque && (
                  <p className={style.errormessage}>{error.ataque}</p>
                )}            
          
         </p>
{/* -------------------------------------------------------------------------- */}
           <p>

                {/* input donde ira la defensa */}
                <label>Defensa</label>
          <input 
               type='number'
               min="1"
               value={input.defensa}
               name = 'defensa'
               onChange={(e) => handleChange(e)}
               />            
            {error.defensa && (
                  <p className={style.errormessage}>{error.defensa}</p>
                )} 
          </p>
           
{/* -------------------------------------------------------------------------- */}
           
         <p>

                {/* input donde ira la velocidad*/}  
                <label>Velocidad</label>        
               <input
               type='number'
               min="1"
               value={input.velocidad}
               name = 'velocidad'
               onChange={(e) => handleChange(e)}
               />  
               {error.velocidad && (
                  <p className={style.errormessage}>{error.velocidad}</p>
                )}          
        </p>
           
{/* -------------------------------------------------------------------------- */}
           <p>

           {/* input donde ira la altura */}
           <label>Altura</label>
               <input
               type='number'
               min="1"
               value={input.altura}
               name = 'altura'
               onChange={(e) => handleChange(e)}
               />   
               {error.altura && (
                  <p className={style.errormessage}>{error.altura}</p>
                )}       
          </p>
           
          
{/* -------------------------------------------------------------------------- */}
           
         <p>

           {/* input donde ira el peso */}
           <label>Peso</label>

          <input
               type='number'
               min="1"
               value={input.peso}
               name = 'peso'
               onChange={(e) => handleChange(e)}
               />   
               {error.peso && (
                  <p className={style.errormessage}>{error.peso}</p>
                )}       
        </p>
{/* -------------------------------------------------------------------------- */}
           
<p>

<label> Select Types: </label>
  <select onChange={(e) => handleSelect(e)}>
  
     {allTypes.map((e)=>(
       <option key={e.name} value={e.name}>{e.name}</option>
       
       ))}

    
  </select>

  </p>
{/* -------------------------------------------------------------------------- */}
          
          <p className={style.block}>

            {/* input donde ira la imagen */}     
            <label>URL Imagen</label> 
               <input
               type='text'
               min="1"
               value={input.imagen}
               name = 'imagen'
               rows = "1"
               onChange={(e) => handleChange(e)}
               />                       
         </p>
           
           
{/* -------------------------------------------------------------------------- */}


      <p  className={style.block}>
      <button onClick={e=>handleSubmit(e)}>
          Crear pokemon
        </button>
      </p>
      
      <p className={style.block}>
        <Link to="/home">
          <button className="return-button">Regresar al home</button>
        </Link>
        <br/>
        
      </p>
            <p className={style.block}>
      {input.types.length > 2 ? (
        <p className={style.errormen}>Seleccione Máximo 2 Tipos</p>
        ) : null}
        </p> 
            
      </form>
      {input.types.map((el) => (
        <div key={el.id}>
        
                <button
                  
                  onClick={() => handleDelete(el)}
                  >
                  {el + " X"} 
                </button>
              </div>
            ))}
      </div>
      
            </div>
            <div className={style.contact_info}>
        <h4>SABIAS QUE?...</h4>
        
        <p>La palabra Pokémon es la contracción romanizada de la marca japonesa Pocket Monsters (monstruos de bolsillo).</p>
        
          <img className={style.foto} src={foto} alt = "Image not found"></img>
        
    </div>
            </div>
                  </div>
                  </div>
      </Fragment>
    )

}
