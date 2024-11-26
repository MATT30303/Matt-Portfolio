import "../assets/styles/global.css";
import Styles from "./Home.module.css";
export default function Home() {
  return (
    <article className={Styles.home}>
      <div className={Styles.flan}></div>
      <section className={Styles.textContainer}>
        <span className={Styles.note}>Welcome to my portfolio</span>
        <div className={Styles.introBox}>
          <span className={Styles.introText}>
            I&apos;m Fabián, a passionate web developer dedicated to building
            intuitive, modern web experiences with clean, impactful designs.
            Let&apos;s dive in!
          </span>
        </div>
      </section>
    </article>
  );
}
