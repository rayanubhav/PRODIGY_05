import express from 'express';
import { signup,login,logout,getMe } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router=express.Router();

router.get("/me",protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;




// router.get('/signup',(req,res)=>{
//     res.json({
//         data:"You hit the signup endpoint",
//     });
// });

