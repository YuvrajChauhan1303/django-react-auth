import React, { useState } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="bg-blue-600 px-4 py-4 min-w-full flex justify-between items-center shadow-lg">
      <div className="text-white text-2xl font-bold">DRN</div>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <a href="/logout">Logout</a>
      </button>
    </div>
  );
};

export default Navbar;
