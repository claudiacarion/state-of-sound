import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to State of Sound</h1>
      <h2 className={styles.subtitle}>A personal soundtrack of favorites and fresh finds.</h2>
      <p className={styles.description}>
        Music is always evolving, and so is what I listen to. State of Sound is a collection of the artists I keep on
        repeat and the new discoveries that have recently caught my attention.
      </p>
    </div>
  );
};

export default Home;
