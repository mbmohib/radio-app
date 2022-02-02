import backImage from '../../assets/images/back-arrow.png';
import switchImage from '../../assets/images/switch.png';
import { Button } from '../../components';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Button>
        <img width={16} src={backImage} alt="back button" />
      </Button>
      <h2 className={styles.content}>stations</h2>
      <Button>
        <img width={24} src={switchImage} alt="switch button" />
      </Button>
    </div>
  );
}
