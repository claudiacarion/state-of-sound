import styles from "./discovery.module.css"
import { discovery } from "../../data/data.js"
import Card from '../Card/index.jsx'

const Discovery = () => {
  return (
    <div className={styles.discovery}>
    <h1 className={styles.title}>Discovery</h1>
    <h2 className={styles.description}>Artists I’ve recently discovered and can’t wait to add to my rotation.</h2>
        <Card {...discovery} />
    </div>
  )
}

export default Discovery