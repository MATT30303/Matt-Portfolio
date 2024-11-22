import "../../assets/styles/global.css";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.home}>
        <span className={styles.homeTxt}>Home</span>
      </div>
      <div className={styles.about}>
        <span className={styles.aboutTxt}>About</span>
      </div>
      <div className={styles.projects}>
        <span className={styles.projectsTxt}>Projects</span>
      </div>
      <div className={styles.contact}>
        <span className={styles.contactTxt}>Contact</span>
      </div>
    </div>
  );
}
