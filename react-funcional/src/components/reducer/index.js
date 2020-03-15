import React, { useState } from 'react';

import useStore from './somaReducer'

function UseReducerExemplo() {

    const [numero, setNumero] = useState()
    const [ segundoNumero, setSegundoNumero ] = useState()
    // const [ resultado, setResultado ] = useState()
    const [ store, dispatch ] = useStore()

    
    const somar = () => {
        // setResultado( parseInt(numero) + parseInt(segundoNumero) )
        dispatch({
            type: 'SOMA',
            payload: parseInt(numero) + parseInt(segundoNumero)
        })
    }
    
    const subtrair = () => {
        dispatch({
            type: 'SUBTRACAO',
            payload: parseInt(numero) - parseInt(segundoNumero)
        })
    }

    return (
        <>
            <h1>useReducer</h1>
            <p>Número 1: <input 
				type='number' 
				value={numero} 
				onChange={event => setNumero(event.target.value)} 
				/></p>

			<p>Número 2: <input 
				type='number' 
				value={segundoNumero} 
				onChange={event => setSegundoNumero(event.target.value)}
				/></p>
			
			<p><button onClick={somar}>Somar</button></p>
            <p><button onClick={subtrair}>Subtrair</button></p>

			<p>Resultado: <input 
				type='text' 
                // value={resultado} 
                value={store.resultado} 
				/></p>
        </>
    )
}

export default UseReducerExemplo