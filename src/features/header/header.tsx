import backImage from '../../assets/images/back-arrow.png';
import switchImage from '../../assets/images/switch.png';
import { Button } from '../../components';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.actionBackArea}>
        <Button>
          <img
            className={styles.actionBackAreaImage}
            src={backImage}
            alt="back button"
          />
        </Button>
      </div>
      <div>
        <h2 className={styles.content}>stations</h2>
      </div>
      <div className={styles.actionSwitchArea}>
        <Button>
          <img
            className={styles.actionSwitchAreaImage}
            src={switchImage}
            alt="switch button"
          />
        </Button>
      </div>
    </div>
  );
}
