import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <Link to="/form">
        <button>ADD PRODUCT</button>
      </Link>
    </div>
  );
};

export default AdminNavbar
