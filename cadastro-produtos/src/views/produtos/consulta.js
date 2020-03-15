import React from 'react'

import Card from '../../components/card'
import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'
	// importamos um decorator - método q recebe vomo parâmetro um componente o o devolve com novas funcionalidades

class ConsultaProdutos extends React.Component {

	state = {
		produtos: []
	}

	constructor() {
		super()
		this.service = new ProdutoService()
	}

	componentDidMount() {
		const produtos = this.service.obterProdutos()
		this.setState({ produtos: produtos })
		// simplificando
		// this.setState({ produtos })
	}

	preparaEditar = (sku) => {
		//console.log('sku para editar', sku) // testar
		this.props.history.push(`/cadastro-produtos/${sku}`)
	}

	deletar = (sku) => {
		const produtos = this.service.deletar(sku)
		this.setState({ produtos })
	}

	render() {
		return (
			<Card header='Consulta Produtos'>
			{/* <div className='card'> */}

				{/* <div className='card-header'>
					Consulta Produtos
                </div> */}

				{/* <div className='card-body'> */}

					<table className='table table-hover'>

						<thead>
							<tr>
								<th>Nome</th>
								<th>SKU</th>
								<th>Preço</th>
								<th>Fornecedor</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							{this.state.produtos.map((produto, index) => (
								<tr key={index}>
									<th>{produto.nome}</th>
									<th>{produto.sku}</th>
									<th>{produto.preco}</th>
									<th>{produto.fornecedor}</th>
									<th>
										
										<button 
											onClick={() => this.preparaEditar(produto.sku)} 
											className='btn btn-primary'>
												Editar
										</button>

										<button 
											onClick={() => this.deletar(produto.sku)}
											className='btn btn-danger'>
												Remover
										</button>

									</th>
								</tr>
							))
							}
						</tbody>

					</table>
					
				{/* </div> */}
			{/* </div> */}
			</Card>
		)
	}
}

export default withRouter(ConsultaProdutos)
	// agora esse objeto terá acesso a uma propriedade history