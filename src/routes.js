import express, { Router } from "express";

import ProjectController from "./app/controllers/ProjectController";
import TasksController from "./app/controllers/TasksController";

const routes = new Router();
routes.use(express.json());

routes.get("/projects", ProjectController.index);

routes.post("/projects", ProjectController.store);

routes.put("/projects/:id", ProjectController.update);

routes.delete("/projects/:id", ProjectController.delete);

routes.post("/projects/:id/tasks", TasksController.store);

export default routes;
