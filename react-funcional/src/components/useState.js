import React, { useState } from 'react';

function UseStateExemplo() {

	// PRIMEIRA FORMA
		// dentro do parenteses coloca o valor padrão... nesse caso não coloquei, então será inexiste
  const [ numero, setNumero ] = useState() 
	const [ segundoNumero, setSegundoNumero ] = useState()
	const [ resultado, setResultado ] = useState()

	// SEGUNDA FORMA
	// const [state, setState] = useState({
	// 	numero: null,
	// 	segundoNumero: null,
	// 	resultado: null
	// })

	const somar = () => {
		setResultado( parseInt(numero) + parseInt(segundoNumero) )
	}

  return (
    <div>
			{/* PRIMEIRA FORMA */}

			<h1>useState</h1>

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

			<p>Resultado: <input 
				type='text' 
				value={resultado} 
				/></p>

			{/* SEGUNDA FORMA */}
			{/* <p><input type='text' value={state.numero} /></p>
			<p><input type='text' value={state.segundoNumero} /></p>
			<p><input type='text' value={state.resultado} /></p> */}

    </div>
  );
}

export default UseStateExemplo;
