import React from 'react';

// class App extends React.Component {

//   // 11
//   // state = {
//   //   nome: ""
//   // }
//   // mudificarNome = (event) => {
//   //   this.setState({ nome: event.target.value })
//   // }

//   // 12
//   // criaComboBox = () => {
//   //   const opcoes = ['Fulano', 'Cicrano']
//   //   const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
//   //   return (
//   //     <select>
//   //       {comboBoxOpcoes}
//   //     </select>
//   //   )
//   // }

//   // 14
//   // componentDidMount() {
//   //   console.log('Executou o componentDidMount')
//   // }

//   render() {
//     // 14
//     // console.log('Executou o render')

//     // 12
//     // const MeuComboBox = () => this.criaComboBox()

//     return (
//       <>
//         {/* 11 */}
//         {/* <input type='text' value={this.state.nome} onChange={this.mudificarNome} />
//         <h1> Oi {this.state.nome}</h1> */}

//         {/* 12 */}
//         {/* <MeuComboBox/> */}

//         {/* 13 - props */}
//         {/* <h1> {this.props.nome} tem {this.props.idade} anos de idade</h1> */}

//       </>
//     )
//   }
// }


// 15 - componente funcional
function App(props) {

  const modificarNome = (event) => {
   console.log(event.target.value)
  }

  // podemos ter funções, mas agora dentro de uma const, q recebe uma arrow function
  const criaComboBox = () => {
    const opcoes = ['Fulano', 'Cicrano']
    const comboBoxOpcoes = opcoes.map((opcao, index) => <option key={index}>{opcao}</option>)
    return (
      <select>
        <option hidden></option>
        {comboBoxOpcoes}
      </select>
    )
  }

  // Tb posso ter o método, mas agora sem o this
  const MeuComboBox = () => criaComboBox()

  return (
    <>
    <input className='texto-centralizado' type='text' value={props.nome} onChange={modificarNome} />
    <h1> {props.nome} tem {props.idade} anos de idade</h1>
    <MeuComboBox/>
    </>
  )
}

export default App;
