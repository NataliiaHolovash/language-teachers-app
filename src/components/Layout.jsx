import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          LearnLingo
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/teachers" className={styles.link}>Teachers</NavLink>
        </nav>

        <div className={styles.auth}>
          <button className={styles.login}>Log in</button>
          <button className={styles.register}>Registration</button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
