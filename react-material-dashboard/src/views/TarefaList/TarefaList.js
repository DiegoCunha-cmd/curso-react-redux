import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';

import axios from 'axios'


// axios.get('https://minhastarefas-api.herokuapp.com/tarefas', {
//     headers: { 'x-tenant-id': 'rosana@email.com' }
// }).then( resposta => {
//     console.log(resposta.data)
// })

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

  const [tarefas] = useState([]); // não tem info pq passei um array vazio

  const salvar = (tarefa) => {
    axios.post(
      'https://minhastarefas-api.herokuapp.com/tarefas', 
      tarefa, 
      { headers: { 'x-tenant-id': 'rosana@email.com' } }
      ).then(response => {
        console.log(response.data)
      }).catch(erro => {
        console.log(erro)
      })
  }

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar} /> {/* vamos usar o método salvar na toolbar, com submit  */}
      <div className={classes.content}>
        <TarefasTable tarefas={tarefas} />
      </div>
    </div>
  );
};

export default TarefaList;
