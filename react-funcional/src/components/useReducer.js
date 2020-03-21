import React, { useState } from 'react';

import useStore from '../reducer/calculaReducer'

function UseReducerExemplo() {

    const [numero, setNumero] = useState()
    const [ segundoNumero, setSegundoNumero ] = useState()
    
    // COMO ERA ANTES
    // const [ resultado, setResultado ] = useState()
    
    // AGORA
    const [ store, dispatch ] = useStore()

    
    const somar = () => {
        // COMO ERA ANTES
        // setResultado( parseInt(numero) + parseInt(segundoNumero) )

        // AGORA
        // console.log('dispachando a action SOMA')
        dispatch({
            type: 'SOMA',
            payload: parseInt(numero) + parseInt(segundoNumero)
        })
    }
    
    const subtrair = () => {
        // COMO ERA ANTES
        // setResultado( parseInt(numero) - parseInt(segundoNumero) )

        // AGORA
        // console.log('dispachando a action SUBTRACAO')
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

			<p><span>Resultado: </span>
                {/* COMO ERA ANTES */}
                {/* {resultado} */}

                {/* AGORA */}
                {store.resultado}
            </p>
        </>
    )
}

export default UseReducerExemplo