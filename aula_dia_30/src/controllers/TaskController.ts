import {request, response} from 'express';
import {TaskService} from '../services/TaskService';
import {TaskView} from '../views/TaskView';

export class TaskController {
    private Service = new TaskService();

    getAll(req = request, res = response): void {
        const tasks = this.Service.getAll();
        TaskView.success(res, tasks);
    }

    getOne(req = request, res = response): void {
        try {
            const id = Number(req.params.id);
            const task = this.Service.getOne(id);
            if (!task) return TaskView.error(res, "Tarefa não encontrada", 404);
            TaskView.success(res, task);
        } catch (error: any) {
            TaskView.error(res, error.message, 400);
        }
    }

    create(req = request, res = response): void {
        try {
            const {title} = req.body;
            const task = this.Service.create(title);
            TaskView.success(res, task, 201);
        } catch (error: any) {
            TaskView.error(res, error.message, 400);
        }
    }

    update(req = request, res = response): void {
        try {
            const id = Number(req.params.id);
            const {title, done} = req.body;
            const task = this.Service.update(id, title, done);
            TaskView.success(res, task);
        } catch (error: any) {
            if (error.message === "Tarefa não encontrada") {
                return TaskView.error(res, error.message, 400);
            }
        }
    }
    
    delete(req = request, res = response): void {
        try {
            const id = Number(req.params.id);
            const removed = this.Service.delete(id);
            if (!removed) return TaskView.error(res, "Tarefa não encontrada", 404);
            TaskView.success(res, {message: "Tarefa deletada com sucesso"});
        } catch (error: any) {
            TaskView.error(res, error.message, 400);
        }
    }
}
           