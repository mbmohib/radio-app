import { Footer, Header, Station } from '../features';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.stations}>
        <div className={styles.station}>
          <Station />
        </div>
        <div className={styles.station}>
          <Station />
        </div>
        <div className={styles.station}>
          <Station />
        </div>
      </div>
      <Footer station="Putin FM" />
    </div>
  );
}
