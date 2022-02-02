import styles from './station.module.css';

type StationProps = {
  name?: string;
  frequency?: string;
};

export default function Station({ name, frequency }: StationProps) {
  return (
    <div className={styles.container}>
      <p>Putin FM</p>
      <p>66.6</p>
    </div>
  );
}
