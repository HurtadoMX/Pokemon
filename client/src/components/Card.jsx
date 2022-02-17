import React from "react";
import style from "./styles/Card.module.css"

export default function Card({name, types, img}){
    return(
       
        <div className={style.container}>
            
            
            <figure >
                <img  src={img} alt="img no encontrada" />
                <div className = {style.capa}>
                     <h3> {name}</h3>
                     <h3> Types: {types}</h3>    
                      </div>
         </figure>
         
        </div>
       
    )
}