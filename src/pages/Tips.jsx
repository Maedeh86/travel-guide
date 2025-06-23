
import styles from '../styles/Page.module.css';

const Tips = () => (
  <section className={styles.page}>
    <h1>Travel Tips</h1>
    <img src="images/luggage.jpg" alt="Luggage" />
    <ul className={styles.tips}>
      <li>Pack light</li>
      <li>Always carry a power bank</li>
      <li>Learn a few local phrases</li>
    </ul>
  </section>
);

export default Tips;
