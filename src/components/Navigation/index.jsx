import styles from "./navigation.module.css";
import Hamburger from "../Hamburger";

const Navigation = ({ updateFunction, isOpen, menuFunction }) => {
  const toggleMenu = () => menuFunction(currentState => !currentState);

  return (
    <div className={styles.navWrapper}>
      <Hamburger menuFunction={toggleMenu} isOpen={isOpen} />
      <nav
        className={`${styles.navbar} ${isOpen ? `${styles.open} animate__animated animate__fadeIn` : ""}`}
        onClick={e => e.target === e.currentTarget && menuFunction(false)}>
        <span
          className={styles.navBtn}
          onClick={() => {
            updateFunction(null);
            menuFunction(false);
          }}>
          Home
        </span>
        <span
          className={styles.navBtn}
          onClick={() => {
            updateFunction("repeat");
            menuFunction(false);
          }}>
          On Repeat
        </span>
        <span
          className={styles.navBtn}
          onClick={() => {
            updateFunction("discovery");
            menuFunction(false);
          }}>
          Discovery
        </span>
        <span
          className={styles.navBtn}
          onClick={() => {
            (updateFunction("about"), menuFunction(false));
          }}>
          About
        </span>
      </nav>
    </div>
  );
};

export default Navigation;
