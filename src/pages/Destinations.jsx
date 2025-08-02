import PageLayout from '../components/PageLayout';
import styles from '../styles/Page.module.css';

const places = [
  { name: 'Paris', img: '/images/paris.jpg' },
  { name: 'Tokyo', img: '/images/tokyo.jpg' },
  { name: 'Rio', img: '/images/rio.jpg' }
];

const Destinations = () => (
  <PageLayout title="Top Destinations">
    <div className={styles.cards}>
      {places.map((place, index) => (
        <div key={index} className={styles.card}>
          <img src={place.img} alt={place.name} />
          <h3>{place.name}</h3>
        </div>
      ))}
    </div>
  </PageLayout>
);

export default Destinations;
