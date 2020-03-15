import React from 'react'

import Card from '../../components/card'
import ProdutosTable from './produtosTable'

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

					{/* tirei toda a tabela daqui e levei pra produtosTable.js */}
					<ProdutosTable
					
						// vamos passar as props pra usar lá
						produtos={this.state.produtos}
						editarAction={this.preparaEditar}
						deletarAction={this.deletar}

					/>


				{/* </div> */}
			{/* </div> */}
			</Card>
		)
	}
}

export default withRouter(ConsultaProdutos)
	// agora esse objeto terá acesso a uma propriedade history