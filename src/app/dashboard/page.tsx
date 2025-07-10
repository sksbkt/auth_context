"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";
import Button from "../../components/button";
import { useAuth } from "@/context/AuthContext";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  useEffect(() => {
    if (!user) router.replace("/auth");
  }, [router, user]);

  if (!user) {
    return (
      <div className={styles.dashboardContainer}>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.welcomeMessage}>
        به پنل کاربری {user.name.first} {user.name.last} خوش آمدید!
      </h1>
      <Button
        onClick={() => {
          logout();
        }}
        className={styles.logoutButton}
      >
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;
