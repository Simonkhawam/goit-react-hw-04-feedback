import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul>
      <div className={styles.statistics}>
        <li className={styles.good}>Good: {good}</li>
        <li className={styles.neutral}>Neutral: {neutral}</li>
        <li className={styles.bad}> Bad: {bad}</li>
      </div>

      <div className={styles.feedbackInfo}>
        <li className={styles.total}>Total: {total}</li>
        <li className={styles.positiveFeedback}>
          Positive Feedback Percentage: {positivePercentage}%
        </li>
      </div>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
