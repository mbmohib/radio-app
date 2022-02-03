import { useState } from 'react';

import { PreLoader } from '../components';
import { Footer, Header, Station } from '../features';
import { useGetRadios } from '../services/radio.api';
import styles from './home.module.css';

export default function Home() {
  const { data, isLoading } = useGetRadios();
  const [currentlyPlaying, setCurrentlyPlaying] = useState<
    Station | undefined
  >();

  return (
    <div className={styles.container}>
      <Header />
      <PreLoader isLoading={isLoading}>
        <div className={styles.stations}>
          {data?.map(station => (
            <div
              tabIndex={0}
              role="button"
              onKeyPress={() => setCurrentlyPlaying(station)}
              onClick={() => setCurrentlyPlaying(station)}
              className={styles.station}
              key={station.id}
            >
              <Station
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
