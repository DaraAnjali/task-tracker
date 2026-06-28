import TaskCard from "./TaskCard";

const TaskList = ({ tasks, getTasks, setEditingTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <h2 className="text-2xl font-semibold">
          No Tasks Found
        </h2>

        <p>Create your first task.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          getTasks={getTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
};

export default TaskList;