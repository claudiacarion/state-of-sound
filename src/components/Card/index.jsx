import styles from "./card.module.css";
import { getImageUrl } from "../../utils/function.js";

const Card = ({ name, image, genre, description, link }) => {
  return (
    <div className={`${styles.card} animate__animated animate__fadeIn`} style={{ animationDuration: "1.5s", animationDelay: '0.3s' }}>
      <h3 className={styles.name}>{name}</h3>
      <img className={styles.image} src={getImageUrl(image)} />
      <p className={styles.genre}>Genre: {genre}</p>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.linkIcon} target="_blank">
        <i className="fa-brands fa-youtube"></i>
      </a>
    </div>
  );
};

export default Card;
