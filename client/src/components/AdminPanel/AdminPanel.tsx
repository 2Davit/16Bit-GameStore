import React from "react";
import MainContent from "./MainContent";
import Panel from "./Panel";
import AdminNavbar from "./AdminNavbar";
import styles from "./Styles/AdminPanel.module.css"

const AdminPanel = () => {
  return (
    <div className={styles.mainContainer}>
      <AdminNavbar />
      <div className={styles.infoContainer}>
      <Panel />
      <MainContent />
      </div>
    </div>
  );
};

export default AdminPanel;
