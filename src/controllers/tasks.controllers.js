import Task from "../model/Task";

export const renderLogin = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("login", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export async function renderDashboard(req, res) {
  try {
    const tasks = await Task.find().lean();
    res.render("dashboard", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
}

export async function renderCreatedQuestion(req, res) {
  try {
    const tasks = await Task.find().lean();
    res.render("partials/tasks/viewForm", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
}

export const renderViewQuestion = async (req, res, next) => {
  try {
    const tasks = await Task.find().lean();
    res.render("partials/tasks/viewTable", {
      tasks,
    });
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/createQuestion");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const taskToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/createQuestion");
};

export const renderTaskEdit = async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean();
  const question = await Task.find().lean();
  res.render("edit", { task, question });
};

export const editTask = async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  res.redirect("/createdQuestion");
};

export const deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect("/createdQuestion");
};

// export const loginTask = async (req, res, next) => {
//   let { id } = req.params;
//   await Task.remove({ _id: id });
//   res.redirect("/login");
// };

// export const createQuestionByID = async (req, res, next) => {
//   let { id } = req.params;
//   await Task.remove({ _id: id });
//   res.redirect("/createQuestion");
// };

// export const viewQuestionByID = async (req, res, next) => {
//   let { id } = req.params;
//   await Task.remove({ _id: id });
//   res.redirect("/viewQuestion");
// };

// export const dashboardByID = async (req, res, next) => {
//   let { id } = req.params;
//   await Task.remove({ _id: id });
//   res.redirect("/dashboard");
// };
