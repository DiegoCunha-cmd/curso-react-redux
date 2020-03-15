// é onde ficará a lógica do cadastro, salvando produtos, recuperando, etc.

const PRODUTOS = '_PRODUTOS'
    // nome da variável que vai armazenar meus produtos no Local Storage

export function ErroValidacao(errors) {
    this.errors = errors
}

export default class ProdutoService {

    validar = (produto) => {
        const errors = []

        if(!produto.nome) { //se não passar nome (vazio ou nulo)
            errors.push('O campo Nome é obrigatório')
        }
        if(!produto.sku) { 
            errors.push('O campo SKU é obrigatório')
        }
        if(!produto.preco //se não passar preço (vazio ou nulo)
            || produto.preco <= 0) { // ou preço <= 0
            errors.push('O campo Preço deve ter um valor maior que zero(0)')
        }
        if(!produto.fornecedor) { //se não passar nome (vazio ou nulo)
            errors.push('O campo Fornecedor é obrigatório')
        }

        if(errors.length > 0) { // se tem erro
            throw new ErroValidacao(errors)
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    salvar = (produto) => {
        // antes de começar ele já chama o validar
         this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos) { // se não existe, inicializo vazio
            produtos = []
        } else { // se existe, será uma string, então preciso transformar em array
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        //agora, atualizado, adiciono ele no LocalStorage

        localStorage.setItem( PRODUTOS, JSON.stringify(produtos) )
            // chave e valor ... o valor transformado em string
    }

}