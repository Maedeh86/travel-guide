import styles from './PageLayout.module.css';

const PageLayout = ({ title, children }) => {
  return (
    <section className={styles.page}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default PageLayout;
