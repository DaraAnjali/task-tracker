import { useEffect, useState } from "react";
import API from "../services/api";

import DashboardCards from "../components/DashboardCards";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const getTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <TaskForm
          getTasks={getTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        <DashboardCards tasks={tasks} />

        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          getTasks={getTasks}
          setEditingTask={setEditingTask}
        />

      </div>
    </>
  );
};

export default Home;