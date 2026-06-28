import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <img
          src={logo}
          alt="Task Tracker"
          className="h-16 object-contain"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
          + Add Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;