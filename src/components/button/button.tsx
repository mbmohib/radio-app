import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({
  children,
}: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <button className={styles.base}>{children}</button>;
}
