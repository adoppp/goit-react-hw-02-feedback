import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positive }) => { 
    return (
        <div>
            <p className={css.p}>Good: {good}</p>
            <p className={css.p}>Neutral: {neutral}</p>
            <p className={css.p}>Bad: {bad}</p>
            <p className={css.p}>Total: {total}</p>
            <p className={css.p}>Positive: {positive}%</p>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
}