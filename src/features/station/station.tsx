import minus from '../../assets/images/minus.png';
import plus from '../../assets/images/plus.png';
import stationImg from '../../assets/images/station.png';
import { Button } from '../../components';
import styles from './station.module.css';

type StationProps = {
  name?: string;
  station: Station;
  isActive?: boolean;
};

export default function Station({
  station: { name, frequency },
  isActive,
}: StationProps) {
  return (
    <div className={styles.container}>
      {isActive && (
        <div className={styles.details}>
          <Button>
            <img width={24} src={minus} alt={name} />
          </Button>
          <img className={styles.stationImg} src={stationImg} alt={name} />
          <Button>
            <img width={24} src={plus} alt={name} />
          </Button>
        </div>
      )}
      <div className={styles.header}>
        <p>{name}</p>
        <p className={styles.frequency}>{frequency}</p>
      </div>
    </div>
  );
}
