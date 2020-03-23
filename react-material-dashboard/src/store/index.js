import { combineReducers } from 'redux'

import { tarefaReducer } from './tarefasReducer'
import { mensagemReducer } from './mensagensReducer'

const mainReducer = combineReducers({
    tarefas: tarefaReducer,
    mensagem: mensagemReducer
})

export default mainReducer