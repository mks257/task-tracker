import React from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
        background: "#f1f2f6",
        borderRadius: "4px",
        marginTop: "6px",
      }}
    >
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button
        style={{ background: "#dc3545" }}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
