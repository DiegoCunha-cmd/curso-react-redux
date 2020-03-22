import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

// import axios from 'axios'

// TESTANDO INTEGRAÇÃO COM API
// axios.get('https://minhastarefas-api.herokuapp.com/tarefas', {
//     headers: { 'x-tenant-id': 'rosana@email.com' }
// }).then( resposta => {
//     console.log(resposta.data)
// })

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
