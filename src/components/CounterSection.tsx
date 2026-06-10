import React from 'react';
import CounterWidget from './CounterWidget';

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
    <section className="my-12">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-[600px] mx-auto">
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
      </div>
    </section>
  );
};

export default CounterSection;
