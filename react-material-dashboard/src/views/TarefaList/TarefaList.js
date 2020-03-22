import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
// import axios from 'axios'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { listar, salvar, deletarTarefa, alterarStatus } from '../../store/tarefasReducer'

import { TarefasToolbar, TarefasTable } from './components';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));


const TarefaList = (props) => {

  const classes = useStyles();

  // MOCKUPS
  // const [tarefas] = useState([]); // não tem info pq passei um array vazio

  // FLUX
  // const [tarefas, setTarefas] = useState([]);

  // const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas'

  // const salvar = (tarefa) => {
  //   axios.post(
  //     API_URL,
  //     tarefa, 
  //     {
  //       headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
  //     }).then(response => {
  //       // console.log(response.data)

  //       // listarTarefas() // chamar o listarTarefas quando salva uma
  //       // OTIMIZAÇÃO - se tiver muitas tarefas, não chamar todas novamente
  //       const novaTarefa = response.data
  //       setTarefas([...tarefas, novaTarefa]) // só adiciono as tarefas já existentes
  //       setMensagem('Item adicionado com sucesso!')
  //       setOpenDialog(true)
  //     }).catch(erro => {
  //       console.log(erro)
  //       setMensagem('Ocorreu um erro ao adicionar tarefa. Tente novamente mais tarde!')
  //       setOpenDialog(true)
  //     })
  // }

  // const listarTarefas = () => {
  //   axios.get(
  //     API_URL,
  //     {
  //       headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
  //     }).then(response => {
  //       const listaDeTarefas = response.data
  //       setTarefas(listaDeTarefas)
  //       // console.log(listaDeTarefas)
  //     }).catch(erro => {
  //       console.log(erro)
  //       setMensagem('Ocorreu um erro ao listar tarefas. Tente novamente mais tarde!')
  //       setOpenDialog(true)
  //     })
  // }
  // REDUX - vem como listar

  // const alterarStatus = (id) => {
  //   axios.patch(
  //     `${API_URL}/${id}`,
  //     null,
  //     {
  //       headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
  //     }).then(response => {
  //       // console.log(response.status)
  //       const lista = [...tarefas]
  //       lista.forEach(tarefa => {
  //         if(tarefa.id === id) {
  //           tarefa.done = true
  //         }
  //       })
  //       setTarefas(lista)
  //       setMensagem('Status do item atualizado com sucesso!')
  //       setOpenDialog(true)
  //     }).catch(erro => {
  //       console.log(erro)
  //       setMensagem('Ocorreu um erro ao alterar status da tarefa. Tente novamente mais tarde!')
  //       setOpenDialog(true)
  //     })
  // }

  // const deletarTarefa = (id) => {
  //   // console.log('passada prop', id)
  //   axios.delete(
  //     `${API_URL}/${id}`,
  //     // null,
  //     {
  //       headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
  //     }).then(response => {
  //       // console.log(response.status)
  //       const lista = tarefas.filter(tarefa => tarefa.id !== id)
  //       setTarefas(lista)
  //       setMensagem('Item removido com sucesso!')
  //       setOpenDialog(true)
  //     }).catch(erro => {
  //       console.log(erro)
  //       setMensagem('Ocorreu um erro ao deletar tarefa. Tente novamente mais tarde!')
  //       setOpenDialog(true)
  //     })
  // }


  const [openDialog, setOpenDialog] = useState(false)
  const [mensagem, setMensagem] = useState('')

  //chamar a lista de tarefas assim que entrar na tela
  useEffect(() => {
    // listarTarefas() // FLUX
    listar() // REDUX
  }, []) // chama assim q a tela carregar - igual DidMount

  // REDUX
  const { tarefas, listar, salvar, deletarTarefa, alterarStatus } = props

  return (
    <div className={classes.root}>
      <TarefasToolbar
        salvar={salvar}
      /> {/* vamos usar o método salvar na toolbar, com submit  */}
      <div className={classes.content}>
        <TarefasTable
          tarefas={tarefas}
          alterarStatus={alterarStatus} 
          deletarTarefa={deletarTarefa}
        />
      </div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>
          {mensagem}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  tarefas: state.tarefas.tarefas
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    listar,
    salvar,
    deletarTarefa,
    alterarStatus
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TarefaList);
