import { useState } from 'react';

import { PreLoader } from '../components';
import { Footer, Header, Station } from '../features';
import { useGetRadios } from '../services/radio.api';
import styles from './home.module.css';

export default function Home() {
  const { data, isLoading, isError } = useGetRadios();
  const [currentlyPlaying, setCurrentlyPlaying] = useState<
    Station | undefined
  >();

  const handleCurrentPlaying = (station: Station) => {
    if (currentlyPlaying && station.id === currentlyPlaying.id) {
      setCurrentlyPlaying(undefined);
    } else {
      setCurrentlyPlaying(station);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <PreLoader isLoading={isLoading}>
        {isError && (
          <div className={styles.error} role="alert">
            <p>Sorry! </p>
            <p>The service is unavailable! Please try again later.</p>
          </div>
        )}
        <div className={styles.stations}>
          {data?.map(station => (
            <div className={styles.station} key={station.id}>
              <Station
                handleCurrentPlaying={() => handleCurrentPlaying(station)}
                isPlaying={
                  currentlyPlaying && station.id === currentlyPlaying.id
                }
                station={station}
              />
            </div>
          ))}
        </div>
      </PreLoader>
      <Footer stationName={currentlyPlaying?.name} />
    </div>
  );
}
