import express from 'express'
import { Login, logout, Register } from '../controllers/usercontroller.js'
import { createtweet, deletetweet, likeordislike } from '../controllers/tweetcontroller.js'
import isAuthenticated from '../config/auth.js'

const router = express.Router()
router.route('/create').post(isAuthenticated,createtweet)
router.route('/like/:id').put(isAuthenticated ,likeordislike)
router.route('/delete/:id').delete(isAuthenticated ,deletetweet)

export default router