import React from 'react'

export default (props) => (
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
			{/* produtos não vem mais do state */}
			{/* {this.state.produtos.map((produto, index) => ( */}

			{props.produtos.map((produto, index) => (
				<tr key={index}>
					<th>{produto.nome}</th>
					<th>{produto.sku}</th>
					<th>{produto.preco}</th>
					<th>{produto.fornecedor}</th>
					<th>

						{/* muda tb aqui nos botões */}
						<button
							// onClick={() => this.preparaEditar(produto.sku)}
							onClick={() => props.editarAction(produto.sku)}
							className='btn btn-primary'>
							Editar
						</button>

						<button
							// onClick={() => this.deletar(produto.sku)}
							onClick={() => props.deletarAction(produto.sku)}
							className='btn btn-danger'>
							Remover
						</button>

					</th>
				</tr>
			))
			}
		</tbody>

	</table>
)