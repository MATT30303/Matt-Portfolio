import "../assets/styles/global.css";
import Styles from "./About.module.css";
export default function About() {
  return (
    <article className={Styles.about}>
      <div className={Styles.note}>
        A closer look at who I am and what I do.
      </div>
      <div className={Styles.aboutContainer}>
        <span className={Styles.aboutTxt}>
          Hey! I&apos;m Fabián, a passionate web developer with a love for
          creating efficient, user-friendly applications.
        </span>
        <span className={Styles.aboutTxt}>
          With experience in React, Node.js, and more, I enjoy turning ideas
          into reality through clean, dynamic code.
        </span>
        <span className={Styles.aboutTxt}>
          I&apos;m always eager to learn and grow, constantly seeking new
          challenges and ways to improve.
        </span>
      </div>
    </article>
  );
}
