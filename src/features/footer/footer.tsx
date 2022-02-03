import styles from './footer.module.css';

interface FooterProps {
  stationName?: string;
}

export default function Footer({ stationName }: FooterProps) {
  return (
    <div className={styles.container}>
      {stationName && (
        <>
          <p className={styles.label}>currently playing</p>
          <p className={styles.station}>{stationName}</p>
        </>
      )}
    </div>
  );
}
