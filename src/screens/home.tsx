import { Header } from '../features';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
