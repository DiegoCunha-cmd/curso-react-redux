import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consulta'

export default () => {
    return (
            <Switch> {/* como um switch case */}
                <Route exact path="/" component={Home} />
                    {/* poderia usar exact={true} */}
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />               
                <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
            </Switch>
    )
}