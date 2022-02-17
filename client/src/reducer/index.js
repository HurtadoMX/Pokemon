//estodo inicial
const initialState={
    //necesitamos el estado de los pokemones
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: [],
    skeler:[],
    attack:[],
    allAttack:[]
   

}

//le pasamos por parametro el estado inicial antes mencionado
//ademas le pasamos un action
function rootReducer(state = initialState, action){
    //ahora creamos el switch para los casos
    //el action.type es el type que leera de los actions
    //el que sea igual es el que usara
    switch(action.type){
        //ponemos nuestros caso que trae a todo los pokemones
        case 'GET_POKEMONS':
        return{
            //retornamos el estado
            ...state,
            //le pasamos el payload
            //aqui decimos que en el estado pokemons que 
            //en un principio esta vacio
            //Manda todo lo que te pido en la accion GET_POKEMONS
            //es por eso que en el payload en action guardamos la data
            //y eso es lo que va a mostrar el json.data
            pokemons:action.payload,
            allPokemons:action.payload,
            attack:action.payoad,
            allAttack:action.payload
        }
        case 'GET_TYPES':
            return{
                ...state,
                types:action.payload
            }
        case 'ORDER_BY_NAME':
            return{
                ...state,
                pokemons:action.payload
            }
            case 'FILTER_BY_TYPE':
            return{
                ...state,
                pokemons:action.payload
            }
            case 'FILTER_BY_CREATED':
                const allPokemonsDb = state.allPokemons;
                const createdFilter =
                  action.payload === "CREADOS"
                    ? allPokemonsDb.filter((el) => el.createdInDb)
                    : allPokemonsDb.filter((el) => !el.createdInDb);
                    console.log(createdFilter)
                return {
                  ...state,
                  pokemons: createdFilter,
                };
            case 'FILTER_A':

                const sorterdArr =
                action.payload === "desc"
                  ? state.allPokemons.sort((a, b) => {
                      if (a.ataque > b.ataque) {
                        return 1;
                      }
                      if (b.ataque > a.ataque) {
                        return -1;
                      }
                      return 0;
                    })
                  : state.allPokemons.sort((a, b) => {
                      if (a.ataque > b.ataque) {
                        return -1;
                      }
                      if (b.ataque > a.ataque) {
                        return 1;
                      }
                      return 0;
                    });

                    console.log(sorterdArr)

              return {
                ...state,
                pokemons: sorterdArr,
              };

                case 'FILTER_BY_VIDA':
                    return{
                        ...state,
                        pokemons:action.payload
                    }
                    case 'FILTER_BY_DEFENSA':
                    return{
                        ...state,
                        pokemons:action.payload
                    }
                    case 'FILTER_BY_VELOCIDAD':
                    return{
                        ...state,
                        pokemons:action.payload
                    }
                    case 'FILTER_BY_ALTURA':
                    return{
                        ...state,
                        pokemons:action.payload
                    }
                    case 'FILTER_BY_PESO':
                    return{
                        ...state,
                        pokemons:action.payload
                    }
                    case 'GET_DETAILS' :
                        return {
                            ...state,
                            detail: action.payload
                            
                        }
                        case 'GET_DETAILS2' :
                            return {
                                ...state,
                                
                                pokemons:action.payload
                            }
                        case 'SEARCH_BAR' :
                        return {
                            ...state,
                            pokemons: action.payload
                        }
                        case 'GET_TEMPERAMENTS':
                            return{
                                ...state,
                                types: action.payload    
                            }
                        case  "CREATEPOKEMON":
                            return{
                                ...state 
                            }
                            // case "DELETE_POKEMON":
                            //     return{
                            //         ...state,
                            //         pokemon:action.payload
                                    
                            //     }
        default:
        return state;
    }
    
}

export default rootReducer;