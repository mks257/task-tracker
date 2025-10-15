import express from "express";
const router = express.Router();

let tasks = [
  { id: 1, text: "Learn Docker", done: false },
  { id: 2, text: "Build Fullstack App", done: true },
];

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const { text } = req.body;
  const newTask = { id: Date.now(), text, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t));
  res.json(tasks.find(t => t.id === id));
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.sendStatus(204);
});

export default router;
