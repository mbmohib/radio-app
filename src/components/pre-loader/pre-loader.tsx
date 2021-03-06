import styles from './pre-loader.module.css';

type PreLoaderProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const PreLoader = ({ isLoading, children }: PreLoaderProps) => (
  <>
    {isLoading ? (
      <div
        role="progressbar"
        aria-valuetext="loading…"
        aria-busy="true"
        className={styles.container}
      >
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      children
    )}
  </>
);

export default PreLoader;
