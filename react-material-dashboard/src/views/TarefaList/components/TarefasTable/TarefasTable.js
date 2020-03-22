import React from 'react';
// import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton
  // Typography,
} from '@material-ui/core';
// import { textChangeRangeNewSpan } from 'typescript';

import {
  Timer,
  DoneAll,
  Delete
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const TarefasTable = props => {

  const { className, tarefas, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>

            <Table>

              <TableHead>

                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Categotia</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>

              </TableHead>

              <TableBody>

                {tarefas.map(tarefa => (
                  <TableRow key={tarefa.id}>
                    <TableCell>{tarefa.id}</TableCell>
                    <TableCell>{tarefa.descricao}</TableCell>
                    <TableCell>{tarefa.categoria}</TableCell>
                    <TableCell>{tarefa.done ? 'Feito' : 'Pendente'}</TableCell>
                    <TableCell>
                      {tarefa.done ?
                        (<IconButton color='secondary' >
                          <DoneAll />
                        </IconButton >)
                        :
                        (<IconButton color='primary' onClick={() => props.alterarStatus(tarefa.id)} >
                          <Timer />
                        </IconButton >)
                      }
                    </TableCell>
                    
                    <TableCell>
                      <IconButton onClick={() => props.deletarTarefa(tarefa.id)}>
                        <Delete/>
                      </IconButton>
                    </TableCell>

                  </TableRow>
                ))}

              </TableBody>

            </Table>

          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

TarefasTable.propTypes = {
  className: PropTypes.string,
  tarefas: PropTypes.array.isRequired
};

export default TarefasTable;
