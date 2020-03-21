import { useReducer } from 'react'

const STATE_INICIAL = {
    resultado: '-- RESULTADO NA STORE --'
}

const calculaReducer = ( state = STATE_INICIAL, action ) => {
        // veja que inicializado o state como STATE_INICIAL

    console.log('action executada: ', JSON.stringify(action))

    switch( action.type ) {
        
        // case 'SOMA':
        //     return { 
        //         ...state, 
        //         resultado: action.payload 
        //     }
        //     // se é soma, retorna o estado atual e altera o resultado
        //     // payload é o dado que está vindo junto com a action
        // case 'SUBTRACAO':
        //     return { 
        //         ...state, 
        //         resultado: action.payload 
        //     }
        
        // como os retornos são idênticos, poderíamos fazer
        case 'SOMA':
        case 'SUBTRACAO':
            return { 
                ...state, 
                resultado: action.payload 
            }

        default:
            return state;
    }
}

// useReducer recebe 2 parâmetroS... o reducer a ser tratado e o estado
const useStore = () => useReducer(calculaReducer, STATE_INICIAL)

export default useStore