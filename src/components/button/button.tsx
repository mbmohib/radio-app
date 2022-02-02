import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className={styles.base}>{children}</button>;
}
