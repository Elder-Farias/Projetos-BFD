import {Router} from 'express';
import {TaskController} from '../controllers/TaskController';

const router = Router();
const controller = new TaskController();

router.get('/tasks', controller.getAll.bind(controller));
router.get('/tasks/:id', controller.getOne.bind(controller));
router.post('/tasks', controller.create.bind(controller));
router.put('/tasks/:id', controller.update.bind(controller));
router.delete('/tasks/:id', controller.delete.bind(controller));

export default router;