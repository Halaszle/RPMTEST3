import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.container}>
        <span>Red Pine Mushroom</span>
        <span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Designed by Konrad Kisło
          </a>
        </span>
      </div>
    </footer>
  );
}
