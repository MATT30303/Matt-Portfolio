import "../assets/styles/global.css";
import Styles from "./Home.module.css";
import { Skull, Navbar } from "../components/global";
export default function Home() {
  return (
    <>
      <Skull></Skull>
      <article className={Styles.home}>
        <Navbar></Navbar>
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
    </>
  );
}
