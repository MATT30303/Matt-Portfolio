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
        className={nav === 0 ? styles.selected : styles.button}
        onClick={() => {
          selector(0);
        }}
      >
        <span className={styles.homeTxt}>Home</span>
      </div>
      <div
        className={nav === 1 ? styles.selected : styles.button}
        onClick={() => {
          selector(1);
        }}
      >
        <span className={styles.aboutTxt}>About</span>
      </div>
      <div
        className={nav === 2 ? styles.selected : styles.button}
        onClick={() => {
          selector(2);
        }}
      >
        <span className={styles.projectsTxt}>Projects</span>
      </div>
      <div
        className={nav === 3 ? styles.selected : styles.button}
        onClick={() => {
          selector(3);
        }}
      >
        <span className={styles.contactTxt}>Contact</span>
      </div>
    </div>
  );
}
