import { Router} from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const router = Router()

// LISTAR TUDO
router.get('/selecoes', SelecaoController.index)

// BUSCAR SELEÇÃO POR ID
router.get('/selecoes/:id', SelecaoController.show)

// Cadastrar nova seleção
router.post('/selecoes', SelecaoController.store)

// ATUALIZAR POR ID
router.put('/selecoes/:id', SelecaoController.update)

// apagar por ID
router.delete('/selecoes/:id', SelecaoController.delete)

export default router
