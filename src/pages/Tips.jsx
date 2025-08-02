import PageLayout from '../components/PageLayout';
import styles from '../styles/Page.module.css';

const Tips = () => (
  <PageLayout title="Travel Tips">
    <img className={styles.image} src="/images/luggage.jpg" alt="Luggage" />
    <ul className={styles.tips}>
      <li>Pack light</li>
      <li>Always carry a power bank</li>
      <li>Learn a few local phrases</li>
    </ul>
  </PageLayout>
);

export default Tips;
