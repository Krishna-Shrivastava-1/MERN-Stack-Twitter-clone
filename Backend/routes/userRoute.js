import express from 'express'
import { bookmark, getmyprofile, getotheruser, Login, logout, Register } from '../controllers/usercontroller.js'
import isAuthenticated from '../config/auth.js'

const router = express.Router()
router.route('/register').post(Register)
router.route("/login").post(Login)
router.route("/logout").get(logout)
router.route("/bookmark/:id").put(isAuthenticated, bookmark)
router.route("/profile/:id").get(isAuthenticated, getmyprofile)
router.route("/otheruser/:id").get(isAuthenticated, getotheruser)
export default router