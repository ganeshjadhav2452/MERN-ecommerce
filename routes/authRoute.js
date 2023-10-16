import express from 'express'
import { registerController, loginController, forgotPasswordController } from '../controllers/authControllers.js';
import { verifyUser, verifyAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router()

//register user
router.post('/register', registerController)

//login route
router.post('/login', loginController)

//forgot password
router.post('/forgot-password', forgotPasswordController)
//protected route auth
router.get('/user-auth', verifyUser, (req, res) => {
    res.status(200).json({ ok: true })
})

router.get('/test', verifyUser, verifyAdmin, (req, res) => {
    res.send('entered in controller successfully ')
})
export default router;
