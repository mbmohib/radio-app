import { PreLoader } from '../components';
import { Footer, Header, Station } from '../features';
import { useGetRadios } from '../services/radio.api';
import styles from './home.module.css';

export default function Home() {
  const { data, isLoading } = useGetRadios();

  return (
    <div className={styles.container}>
      <Header />
      <PreLoader isLoading={isLoading}>
        <div className={styles.stations}>
          {data?.map(station => (
            <div className={styles.station} key={station.id}>
              <Station station={station} />
            </div>
          ))}
        </div>
      </PreLoader>
      <Footer station="Putin FM" />
    </div>
  );
}
