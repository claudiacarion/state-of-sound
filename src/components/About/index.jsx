import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.description}>
        State of Sound is a project that highlights the artists I keep on repeat and the new sounds I’m discovering.
      </p>
      <p className={styles.description}>
        This assignment was to build a React Single Page Application with a home page and additional pages.
        Navigation is handled using React state to conditionally render pages instead of routing. <br/>The project uses
        functional components, props, reusable components, CSS modules, and responsive styling, with images included on
        each page.
      </p>
      <div className={styles.contact}>
        <h2 className={styles.contact}>Get in touch</h2>
        <h3 className={styles.name}>Claudia Pereira Carion</h3>
        <a href="https://github.com/claudiacarion" className={styles.linkIcon} target="_blank">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/claudia-pereira-carion/" className={styles.linkIcon} target="_blank">
          <i className="fa-brands fa-square-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
