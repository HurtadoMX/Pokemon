//AQUI ES DONDE CONECTAMOS EL BACK CON EL FRONT

//Aqui es donde me ayuda el redux thunk porque me ayuda a trabajar de forma asincrona

//importamos axios para la asincronia
import axios from 'axios'
// const {ALL_POKEMONS, GET_TYPES, ORDER_NAME, FILTER_VIDA, FILTER_ATAQUE, FILTER_DEFENSA, FILTER_VELOCIDAD, FILTER_ALTURA, FILTER_PESO, FILTER_TYPE, FILTER_CREATED, GET_DETAIL, SEARCH_BAR, CREATE_POKEMON,} = process.env

export function getPokemons(){

    return async function(dispatch){
        //nos traemos la info de la ruta que nos trae a todos los pokemones
        var json = await axios(`http://localhost:3001/pokemons`,{})

        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
   
}
export function getTypes(){

    return async function(dispatch){
        //nos traemos la info de la ruta que nos trae a todos los pokemones
        var json = await axios(`http://localhost:3001/types`,{})

        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
   
}

export function orderByName(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/order/${payload}`)

        return dispatch({
            type: 'ORDER_BY_NAME',
            payload:json.data
        })
    }
}



export function filterByType(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/filter/${payload}`)

        return dispatch({
            type: 'FILTER_BY_TYPE',
            payload:json.data
        })
    }
}

// export function filterByCreated(payload){
//     return async function(dispatch){
//         var json = await axios(`http://localhost:3001/creados/${payload}`)
//         // console.log(payload)

//         return dispatch({
//             type: 'FILTER_BY_CREATED',
//             payload:json.data
//         })
//     }
// }

export function filterByCreated(payload){
    console.log(`ME INVOCARON ${payload}`)
    return{
        type:'FILTER_BY_CREATED',
        payload,
    }
}


export function filterByAtaque(payload){
    console.log(`ME INVOCARON ${payload}`)
    return{
        type:'FILTER_A',
        payload,
    }
}

//filtro por vida lo llamamos desde el back
export function filterByVida(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/filterVida/${payload}`)
        // console.log(payload)

        return dispatch({
            type: 'FILTER_BY_VIDA',
            payload:json.data
        })
    }
}

//filtro por defensa lo llamamos desde el back
export function filterByDefensa(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/filterDefensa/${payload}`)
        // console.log(payload)

        return dispatch({
            type: 'FILTER_BY_DEFENSA',
            payload:json.data
        })
    }
}

//filtro por velocidad lo llamamos desde el back
export function filterByVelocidad(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/filterVelocidad/${payload}`)
        // console.log(payload)

        return dispatch({
            type: 'FILTER_BY_VELOCIDAD',
            payload:json.data
        })
    }
}

//filtro por altura lo llamamos desde el back
export function filterByAltura(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/filterAltura/${payload}`)
        // console.log(payload)

        return dispatch({
            type: 'FILTER_BY_ALTURA',
            payload:json.data
        })
    }
}

//filtro por peso lo llamamos desde el back
export function filterByPeso(payload){
    return async function(dispatch){
        var json = await axios(`http://localhost:3001/filterPeso/${payload}`)
        // console.log(payload)

        return dispatch({
            type: 'FILTER_BY_PESO',
            payload:json.data
        })
    }
}

//llamamos por id por params una accion para acceder a los detalles
export function getDetail(id){
    return async function (dispatch){
        var json = await axios(`http://localhost:3001/pokemons/${id}`)
        console.log(`me esta llegando la info, es: ${id}`)
        return dispatch({
            type:'GET_DETAILS',
            payload: json.data
        })
    }
}

export function getDetail2(id){
    return async function (dispatch){
        var json = await axios(`http://localhost:3001/pokemons/${id}`)
        console.log(`me esta llegando la info, es: ${id}`)
        return dispatch({
            type:'GET_DETAILS2',
            payload: json.data
        })
    }
}

//una funcion para eliminar el detalle anterior y no se vea al renderizar otro detalles
export function deleteDetail(){
    return function(dispatch){
        return dispatch({
            type:'GET_DETAILS',
            payload:[]
        })
    }
}

export function deleteDetail2(){
    return function(dispatch){
        return dispatch({
            type:'GET_DETAILS',
            payload:[]
        })
    }
}

//creamos una funcion que llamara a los pokemones pero por nombre, esto lo hara desde el back
export function searchBar(name){
    return async function(dispatch){
        
        var json = await axios(`http://localhost:3001/pokemons?name=${name}`)
      let jsonFilter = json.data.length > 0 ? json : console.log("no encontre")
        return dispatch({
            type:"SEARCH_BAR",
            payload: jsonFilter.data
        })
    }
}

//creo mi funcion para crear mi pokemon
export function createPokemon(payload){
    //llamo a mi ruta donde hago el post
    return async function(dispatch){
        const json = await axios.post(`http://localhost:3001/pokemon`, payload)
        return json
    }
}


//creo mi funcion para eliminar mi pokemon
// export function deletePokemon(payload){
//     return async function(dispatch){
//         const json = await axios(`http://localhost:3001/delete/${payload}`)
//         return dispatch({
            
//             payload: json.data
//         })
//     }
// }

// export async function deletePokemon(payload) {
//     const response = await axios(`http://localhost:3001/delete/${payload}`, {
//       type: "DELETE_POKEMON",
//     });
//     return response.json();
//   }