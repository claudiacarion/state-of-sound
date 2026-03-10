import styles from "./navigation.module.css";
import Hamburger from "../Hamburger";

const Navigation = ({ updateFunction, isOpen, menuFunction }) => {
  const toggleMenu = () => menuFunction(currentState => !currentState);

  return (
    <div className={styles.navWrapper}>
      <Hamburger menuFunction={toggleMenu} isOpen={isOpen} />
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
        <h3
          className={styles.navBtn}
          onClick={() => {
            updateFunction(null);
            menuFunction(false);
          }}>
          Home
        </h3>
        <h3
          className={styles.navBtn}
          onClick={() => {
            updateFunction("repeat");
            menuFunction(false);
          }}>
          On Repeat
        </h3>
        <h3
          className={styles.navBtn}
          onClick={() => {
            updateFunction("discovery");
            menuFunction(false);
          }}>
          Discovery
        </h3>
        <h3
          className={styles.navBtn}
          onClick={() => {
            (updateFunction("about"), menuFunction(false));
          }}>
          About
        </h3>
      </nav>
    </div>
  );
};

export default Navigation;
