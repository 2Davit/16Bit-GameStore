import React from "react";
import MainContent from "./MainContent";
import Panel from "./Panel";
import AdminNavbar from "./AdminNavbar";

const AdminPanel = () => {
  return (
    <div>
      <AdminNavbar />
      <MainContent />
      <Panel />
    </div>
  );
};

export default AdminPanel;
