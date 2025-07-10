"use client";
import Link from "next/link";
import Button from "../../components/button";
import styles from "./Home.module.scss";
import { useAuth } from "@/context/AuthContext";

const HomePage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>سیستم احراز هویت</h1>

      <span className={styles.description}>
        به {user ? <p>پنل کاربری</p> : <p>حساب کاربر</p>} خود وارد شوید
      </span>

      <Link
        href={user ? "/dashboard" : "/auth"}
        className={styles.authLink}
      >
        {user ? "داشبورد" : "ورود"}
      </Link>
      {user && (
        <Button
          onClick={logout}
          className={styles.logoutButton}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default HomePage;
