import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import mainReducer from './store'

// import axios from 'axios'

// TESTANDO INTEGRAÇÃO COM API
// axios.get('https://minhastarefas-api.herokuapp.com/tarefas', {
//     headers: { 'x-tenant-id': 'rosana@email.com' }
// }).then( resposta => {
//     console.log(resposta.data)
// })

const store = applyMiddleware(thunk)(createStore)(mainReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
