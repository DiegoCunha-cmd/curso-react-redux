import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';

import axios from 'axios'

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

      }).catch(erro => {
        console.log(erro)
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
      }).catch(erro => {
        console.log(erro)
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
        <TarefasTable tarefas={tarefas} alterarStatus={alterarStatus} />
      </div>
    </div>
  );
};

export default TarefaList;
