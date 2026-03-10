import styles from "./repeat.module.css";
import { artists } from "../../data/data.js";
import Card from "../Card/index.jsx";

const Repeat = () => {
  return (
    <div className={styles.repeat}>
      <h1 className={styles.title}>On Repeat</h1>
      <h2 className={styles.description}>Artists I return to again and again and always have on rotation.</h2>
      <div className={styles.cardWrapper}>
        {artists.map((artist, index) => (
          <Card key={index} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default Repeat;
