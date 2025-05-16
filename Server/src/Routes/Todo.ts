import { Router } from "express";

import { cretaeNewTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../Controller/Todo";

const router = Router()

router.post('/create',cretaeNewTodo)
router.get('/todos',getTodos)
router.get('/todo/:todoId',getTodo)
router.delete('/todo/:todoId',deleteTodo)
router.put('/todo/:todoId',updateTodo)

export default router