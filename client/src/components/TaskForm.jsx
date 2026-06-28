import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

const TaskForm = ({ getTasks, editingTask, setEditingTask }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        status: editingTask.status,
        dueDate: editingTask.dueDate?.substring(0, 10),
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.title.trim() || !form.description.trim()) {
    toast.error("Please fill all required fields.");
    return;
  }

  if (editingTask) {
    await API.put(`/tasks/${editingTask._id}`, form);
    toast.success("Task updated successfully!");
    setEditingTask(null);
  } else {
    await API.post("/tasks", form);
    toast.success("Task added successfully!");
  }

  setForm({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  getTasks();
};

  return (
    <div className="bg-white rounded-xl shadow-md p-8 mt-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {editingTask ? "Update Task" : "Create New Task"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={form.title}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          className="border rounded-lg p-3 md:col-span-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;