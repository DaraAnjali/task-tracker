import API from "../services/api";
import { toast } from "react-toastify";

const TaskCard = ({ task, getTasks, setEditingTask }) => {
  const deleteTask = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  await API.delete(`/tasks/${task._id}`);

  toast.success("Task deleted successfully!");

  getTasks();
};

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition">

      <h2 className="text-xl font-semibold text-gray-800">
        {task.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {task.description}
      </p>

      <div className="mt-4 space-y-2">

        <p>
          <span className="font-semibold">Priority:</span>{" "}
          <span
  className={`px-3 py-1 rounded-full text-white text-sm
  ${
    task.priority === "High"
      ? "bg-red-500"
      : task.priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500"
  }`}
>
  {task.priority}
</span>
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span
  className={`px-3 py-1 rounded-full text-white text-sm
  ${
    task.status === "Completed"
      ? "bg-green-600"
      : "bg-orange-500"
  }`}
>
  {task.status}
</span>
        </p>

        <p>
          <span className="font-semibold">Due:</span>{" "}
          {task.dueDate?.substring(0,10)}
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => setEditingTask(task)}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={deleteTask}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TaskCard;