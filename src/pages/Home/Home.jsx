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

      <section className={styles.stats}>
        <div><strong>100+</strong><span>Teachers</span></div>
        <div><strong>10+</strong><span>Languages</span></div>
        <div><strong>5000+</strong><span>Students</span></div>
        <div><strong>95%</strong><span>Satisfaction</span></div>
      </section>
    </>
  );
};

export default Home;
