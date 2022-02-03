import { AnimatePresence, motion } from 'framer-motion';

import minus from '../../assets/images/minus.png';
import plus from '../../assets/images/plus.png';
import stationImg from '../../assets/images/station.png';
import { Button } from '../../components';
import styles from './station.module.css';

type StationProps = {
  name?: string;
  station: Station;
  isPlaying?: boolean;
};

export default function Station({
  station: { name, frequency },
  isPlaying,
}: StationProps) {
  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className={styles.details}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: '270px' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Button>
              <img width={24} src={minus} alt={name} />
            </Button>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.8 }}
            >
              <img className={styles.stationImg} src={stationImg} alt={name} />
            </motion.div>
            <Button>
              <img width={24} src={plus} alt={name} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className={styles.header}>
        <p>{name}</p>
        <p className={styles.frequency}>{frequency}</p>
      </motion.div>
    </div>
  );
}
