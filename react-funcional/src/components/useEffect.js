import React, { useState, useEffect } from 'react';

function UseEffectExemplo() {

    const [numero, setNumero] = useState()
    const [ segundoNumero, setSegundoNumero ] = useState()

    // como o componentDidMount podemos usar pra carregar algo na tela
    useEffect(() => {

        //vamos testar e, que momento ele vai imprimir.. 
            // assim q a página carrega (nesse caso, undefined)
            // mesmo que mude depois, nada acontece
        console.log('variável número', numero)

    }
        // esse array é opcional

            // assim, só apareceu o console quando carregou
        , [])

            // mas se passarmos estados, ele vai executar quando esse estado for acionado
        // , [numero])

            // e se não passar nada, ele é modificado toda vez q modificar qq variável
        // )


    return (
        <>
            <h1>useEffect</h1>
            <p>Número: <input type='number' value={numero}
                onChange={event => setNumero(event.target.value)} />
            </p>
            <p>Número 2: <input type='number' value={segundoNumero} 
				onChange={event => setSegundoNumero(event.target.value)}/>
            </p>
        </>
    )
}

export default UseEffectExemplo