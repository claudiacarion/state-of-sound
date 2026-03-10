import styles from "./hamburger.module.css";

const Hamburger = ({ isOpen, menuFunction }) => {
  return (
    <button className={styles.hamburger} onClick={() => menuFunction(isOpen)}>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default Hamburger;
