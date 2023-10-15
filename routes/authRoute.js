import express from 'express'
import { registerController, loginController } from '../controllers/authControllers.js';
import { verifyUser, verifyAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router()

//register user
router.post('/register', registerController)

//login route
router.post('/login', loginController)

router.get('/test', verifyUser, verifyAdmin, (req, res) => {
    res.send('entered in controller successfully ')
})
export default router;
