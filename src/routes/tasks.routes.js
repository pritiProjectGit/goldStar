import { Router } from "express";
import {
  renderViewQuestion,
  renderCreatedQuestion,
  renderDashboard,
  renderLogin,
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
} from "../controllers/tasks.controllers";

const router = Router();

// Render all tasks
router.get("/login", renderLogin);

router.get("/dashboard", renderDashboard);

router.get("/createdQuestion", renderCreatedQuestion);

router.get("/viewQuestion", renderViewQuestion);

router.get("/createQuestion", renderTasks);

router.post("/createQuestion/tasks/add", createTask);

router.get("/createQuestion/tasks/:id/toggleDone", taskToggleDone);

router.get("/createQuestion/tasks/:id/edit", renderTaskEdit);

router.post("/createQuestion/tasks/:id/edit", editTask);

router.get("/createQuestion/tasks/:id/delete", deleteTask);


// router.get("/login", loginTask);

// router.get("/createQuestion", createQuestionByID);

// router.get("/viewQuestion", viewQuestionByID);

// router.get("/dashboard", dashboardByID);





export default router;
