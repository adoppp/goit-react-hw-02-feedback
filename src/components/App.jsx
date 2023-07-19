import React, { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevValue => ({
      [state]: prevValue[state] + 1,
    }));
  };

  totalValue() {
    let total = Object.values(this.state).reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage({ good }) {
    const total = this.totalValue();
    let positive = total !== 0 ? Math.round((good / total) * 100) : 0;
    return positive;
  }

    render() {
      const { good, neutral, bad } = this.state;
      const options = Object.keys(this.state);
      const total = this.totalValue();
      const positive = this.countPositiveFeedbackPercentage(this.state, total);
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={options}></FeedbackOptions>
          </Section>
          <Section title="Statisctics">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive}></Statistics>
          </Section>
        </div>
      );
    };
  };
