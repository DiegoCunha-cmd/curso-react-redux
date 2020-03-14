import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'

export default () => {
    return (
        <HashRouter> {/* Ele adiciona uma # na url e após a rota selecionada */}
            <Switch> {/* como um switch case */}
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                    {/* poderia usar exact={true} */}
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}