import React from "react";
import DashboardLeftPanel from "./DashboardLeftPanel";
import DashboardRightPanel from "./DashboardRightPanel";
import styles from "../css/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <DashboardLeftPanel />
      </div>
      <div className={styles.right}>
        <DashboardRightPanel />
      </div>
    </div>
  );
};

export default Dashboard;
