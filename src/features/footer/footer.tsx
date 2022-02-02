import styles from './footer.module.css';

interface FooterProps {
  station?: string;
}

export default function Footer({ station }: FooterProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>currently playing</p>
      <p className={styles.station}>{station}</p>
    </div>
  );
}
