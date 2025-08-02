
import PageLayout from '../components/PageLayout';
import styles from '../styles/Page.module.css';

const Home = () => (
  <PageLayout title="Welcome to the Travel Guide">
    <img className={styles.image} src="/images/travel.jpg" alt="Travel" />
    <p>Plan your next adventure with us.</p>
  </PageLayout>
);

export default Home;
