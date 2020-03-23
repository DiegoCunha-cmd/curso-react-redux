export const ACTIONS = {
    APARECER_MENSAGEM: 'MENSAGEM_APARECER',
    ESCONDER_MENSAGEM: 'MENSAGEM_ESCONDER'
}

// ================================================ REDUCERS

const ESTADO_INICIAL = {
    mensagem: '',
    mostrarMensagem: false
}

export const mensagemReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {

        case ACTIONS.APARECER_MENSAGEM:
            return {
                ...state,
                mensagem: action.mensagem,
                mostrarMensagem: true
            }

        case ACTIONS.ESCONDER_MENSAGEM:
            return {
                ...state,
                mensagem: '', // segundo o prof, pra não ficar lixo
                mostrarMensagem: false
            }

        default:
            return state
    }

}

// ================================================ ACTIONS

export function mostrarMensagem(mensagem) {
    return {
        type: ACTIONS.APARECER_MENSAGEM,
        mensagem: mensagem
    }
}

export function esconderMensagem() {
    return {
        type: ACTIONS.ESCONDER_MENSAGEM,
    }
}