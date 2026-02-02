import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";


const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
         <svg className={styles.logoImage} width="28" height="28"  >
             <use href="../../publics/logo-icon.svg"></use>
         </svg>
         <p className={styles.logoText}>LearnLingo</p>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/teachers" className={styles.link}>Teachers</NavLink>
        </nav>

        <div className={styles.auth}>
            <div className={styles.logBlock} >
                <svg className={styles.logoImage} width="20" height="20"  >
             <use href="../../publics/log-in.svg"></use>
         </svg>
          <button className={styles.login}>Log in</button>
            </div>
         
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
