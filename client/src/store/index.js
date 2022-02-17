//el redux thunk es un middleware nos permite trabajr con la asincronia
//ademas que nos permite usar action created que nos devuelven funciones y no objetos
// esto con el fin de poder hacer estas funciones asincronas, de forma que 
//las tareas que estan pendientes ocurran cuando termine la funcionalidad que es asincrona

import {createStore, applyMiddleware} from 'redux'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//Nos traemos el reducer que es ahi donde va a ir toda la logica 
import rootReducer from '../reducer'

//aqui incluimos el reducer
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))