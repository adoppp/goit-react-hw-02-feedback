import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback, index }) => {
    return (
        <div>
            {options.map(option => {
                return <button type='button' onClick={() => onLeaveFeedback(option)} key={nanoid()} className={css.buttonFB}>{option}</button>
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};