import express from 'express';
import { viewTable, getUser, addUser, updateUser, deleteUser, test, Search } from '../controllers/user.js';

const router = express.Router();

router.get('/user', viewTable);
router.get('/user/:id', getUser);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/search', Search);
router.get("/test", test);

export default router;
