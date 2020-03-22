import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios'

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


const TarefaList = () => {

  const classes = useStyles();

  // const [tarefas] = useState([]); // não tem info pq passei um array vazio
  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas'
  const headers = { 'x-tenant-id': 'rosana@email.com' }

  const salvar = (tarefa) => {
    axios.post(
      API_URL,
      tarefa, 
      {
        headers: headers
      }).then(response => {
        // console.log(response.data)
        
        // listarTarefas() // chamar o listarTarefas quando salva uma
        // OTIMIZAÇÃO - se tiver muitas tarefas, não chamar todas novamente
        const novaTarefa = response.data
        setTarefas([...tarefas, novaTarefa]) // só adiciono as tarefas já existentes
        setMensagem('Item adicionado com sucesso!')
        setOpenDialog(true)
      }).catch(erro => {
        console.log(erro)
        setMensagem('Ocorreu um erro ao adicionar tarefa. Tente novamente mais tarde!')
        setOpenDialog(true)
      })
  }

  const listarTarefas = () => {
    axios.get(
      API_URL,
      {
        headers: headers
      }).then(response => {
        const listaDeTarefas = response.data
        setTarefas(listaDeTarefas)
        // console.log(listaDeTarefas)
      }).catch(erro => {
        console.log(erro)
        setMensagem('Ocorreu um erro ao listar tarefas. Tente novamente mais tarde!')
        setOpenDialog(true)
      })
  }

  const alterarStatus = (id) => {
    axios.patch(
      `${API_URL}/${id}`,
      null,
      {
        headers: headers
      }).then(response => {
        // console.log(response.status)
        const lista = [...tarefas]
        lista.forEach(tarefa => {
          if(tarefa.id === id) {
            tarefa.done = true
          }
        })
        setTarefas(lista)
        setMensagem('Status do item atualizado com sucesso!')
        setOpenDialog(true)
      }).catch(erro => {
        console.log(erro)
        setMensagem('Ocorreu um erro ao alterar status da tarefa. Tente novamente mais tarde!')
        setOpenDialog(true)
      })
  }

  const deletarTarefa = (id) => {
    // console.log('passada prop', id)
    axios.delete(
      `${API_URL}/${id}`,
      // null,
      {
        headers: headers
      }).then(response => {
        // console.log(response.status)
        const lista = tarefas.filter(tarefa => tarefa.id !== id)
        setTarefas(lista)
        setMensagem('Item removido com sucesso!')
        setOpenDialog(true)
      }).catch(erro => {
        console.log(erro)
        setMensagem('Ocorreu um erro ao deletar tarefa. Tente novamente mais tarde!')
        setOpenDialog(true)
      })
  }


  //chamar a lista de tarefas assim que entrar na tela
  useEffect( () => {
    listarTarefas()
  }, []) // chama assim q a tela carregar - igual DidMount

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar} /> {/* vamos usar o método salvar na toolbar, com submit  */}
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

export default TarefaList;
