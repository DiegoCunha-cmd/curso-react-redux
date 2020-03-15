import React from 'react';

import Navbar from './components/navbar';
import Rotas from './rotas'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter> {/* Ele adiciona uma # na url e após a rota selecionada */}
      <div className='container'>
        <Navbar />
        <Rotas />
      </div>
    </HashRouter>
  );
}

export default App;
