import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white rounded-y-full shadow-sm">
      {/* Left Side: Dashboard Title */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Center: Search Bar */}
      <div className="flex items-center border-none rounded-lg px-3 py-1 bg-gray-100">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none ml-2"
        />
      </div>

      {/* Right Side: Country, Notification, User Profile */}
      <div className="flex items-center space-x-6">
        {/* Country Selection */}
        <div className="flex items-center space-x-1">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="US Flag"
            className="w-5 h-5"
          />
          <p className="text-sm font-medium">Eng (US)</p>
        </div>

        {/* Notification Bell */}
        <div className="relative p-2 bg-yellow-100 rounded-full">
          <FaBell className="text-yellow-600" />
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Musfiq</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
