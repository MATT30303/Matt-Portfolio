import "../../assets/styles/global.css";
import styles from "./Navbar.module.css";
export default function Navbar({ nav, navSelect }) {
  const selector = (num) => {
    if (nav === num) {
      return;
    }
    navSelect(num);
  };

  return (
    <div className={styles.navbar}>
      <div
        className={styles.home}
        onClick={() => {
          selector(0);
        }}
      >
        <span className={styles.homeTxt}>Home</span>
      </div>
      <div
        className={styles.about}
        onClick={() => {
          selector(1);
        }}
      >
        <span className={styles.aboutTxt}>About</span>
      </div>
      <div
        className={styles.projects}
        onClick={() => {
          selector(2);
        }}
      >
        <span className={styles.projectsTxt}>Projects</span>
      </div>
      <div
        className={styles.contact}
        onClick={() => {
          selector(3);
        }}
      >
        <span className={styles.contactTxt}>Contact</span>
      </div>
    </div>
  );
}
