import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.hero}>
         <div className={styles.heroText}>
            <h1 className={styles.title} >Unlock your potential with <br></br> the best <span className={styles.span}>language</span> tutors</h1>
            <p className={styles.description}>Embark on an Exciting Language Journey with Expert Language<br></br> Tutors: Elevate your language proficiency to new heights by<br></br> connecting with highly qualified and experienced tutors.</p>

        <button onClick={() => navigate("/teachers")} className={styles.btn}>
          Get started
        </button>
         </div>

         <div className={styles.heroImage}>
            <img src="/publics/images/smile.svg" alt="smile" className={styles.smile} />
            <img src="/publics/images/Mac.svg" alt="mac" className={styles.mac} />
         </div>
      </div>

      <div className={styles.statsBox}>
        <div className={styles.statsInner}>
        <div className={styles.item}>
        <h3>32,000 +</h3>
        <p>Experienced<br></br> tutors</p>
      </div>

      <div className={styles.item}>
        <h3>300,000 +</h3>
        <p>5-star tutor<br></br> reviews</p>
      </div>

      <div className={styles.item}>
        <h3>120 +</h3>
        <p>Subjects<br></br> taught</p>
      </div>

      <div className={styles.item}>
        <h3>200 +</h3>
        <p>Tutor<br></br> nationalities</p>
      </div>
      </div>
      </div>
    </>
  );
};

export default Home;
