import styles from './Navigation.module.css';

const Navigation = ({ onNavigate }) => (
  <nav className={styles.nav}>
    <button onClick={() => onNavigate('home')}>Home</button>
    <button onClick={() => onNavigate('destinations')}>Destinations</button>
    <button onClick={() => onNavigate('tips')}>Travel Tips</button>
  </nav>
);

export default Navigation;
