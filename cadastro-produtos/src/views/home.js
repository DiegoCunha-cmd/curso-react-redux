import React from 'react'

function Home() {
    return (
        <div className="jumbotron" wfd-id="126">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">
                Este é seu sistema. Utilize a barra de navegação para acessar as páginas.
            </p>
            <hr className="my-4"/>
            <p className="lead">
                {/* <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a> */}
                Crud desenvolvido por <a href='https://github.com/rosanarezende'>Rosana Rezende</a> durante <a href='https://www.udemy.com/course/domine-react-com-redux-2020-bootstrap-material-ui-e-apis-rest/'>curso</a> do professor Dougllas Sousa na Udemy
            </p>
        </div>
    )
}

export default Home