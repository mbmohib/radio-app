import minus from '../../assets/images/minus.png';
import plus from '../../assets/images/plus.png';
import dummyImg from '../../assets/images/preview.png';
import { Button } from '../../components';
import styles from './station.module.css';

type StationProps = {
  name?: string;
  frequency?: string;
  isActive?: boolean;
};

export default function Station({ name, frequency, isActive }: StationProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Putin FM</p>
        <p>66.6</p>
      </div>
      {isActive && (
        <div className={styles.details}>
          <Button>
            <img src={minus} alt={name} />
          </Button>
          <img className={styles.stationImg} src={dummyImg} alt={name} />
          <Button>
            <img src={plus} alt={name} />
          </Button>
        </div>
      )}
    </div>
  );
}
