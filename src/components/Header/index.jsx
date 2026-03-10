import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";
import Navigation from "../Navigation";
import { useState } from "react";

const Header = ({ updatePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <img
        src={logo}
        className={styles.logo}
        onClick={() => {
          (updatePage(null), setIsOpen(false));
        }}
      />
      <Navigation updateFunction={updatePage} isOpen={isOpen} menuFunction={setIsOpen} />
    </header>
  );
};

export default Header;
