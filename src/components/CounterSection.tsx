import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CounterWidget from './CounterWidget';

const CounterSectionContainer = styled.section`
  margin: 3rem 0;
`;

const CounterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CounterSection: React.FC = () => {
  const counters = [
    {
      endValue: 20,
      suffix: "+",
      text: "Reviews Completed",
      duration: 2,
      delay: 0.2
    },
    {
      endValue: 30,
      suffix: "%",
      text: "Cost Savings Average*",
      duration: 2.5,
      delay: 0.4
    }
  ];

  return (
    <CounterSectionContainer>
      <CounterGrid>
        {counters.map((counter, index) => (
          <CounterWidget
            key={index}
            endValue={counter.endValue}
            suffix={counter.suffix}
            text={counter.text}
            duration={counter.duration}
            delay={counter.delay}
          />
        ))}
      </CounterGrid>
    </CounterSectionContainer>
  );
};

export default CounterSection; 