import userRouter from './users.mjs'
import { Router } from 'express'
import express from 'express'

const router = Router()

router.use(express.json())
router.use(userRouter)

export default router;