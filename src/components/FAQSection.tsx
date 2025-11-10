import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Section = styled.section`
  padding: 5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const Question = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.7;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: white;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;

    li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "→";
        position: absolute;
        left: 0;
        color: white;
        font-weight: bold;
      }
    }
  }
`;


interface FAQItemData {
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItemData[] = [
    {
      question: "Why should I trust a new consultancy?",
      answer: (
        <>
          <p>
            <strong>Fair question.</strong> We're new as a company, but not new to AWS. Our team brings enterprise-level cloud expertise—the kind previously only available to Fortune 500 companies—now accessible to growing businesses.
          </p>
          <p>
            Here's what sets us apart:
          </p>
          <ul>
            <li>AWS-certified consultants with 10+ years enterprise cloud experience</li>
            <li>Former senior engineers from leading consultancies and tech companies</li>
            <li>Deep expertise in AWS Well-Architected Framework and cost optimization</li>
            <li>Risk-free engagement: If we don't identify at least 25% in potential savings, you don't pay</li>
          </ul>
          <p>
            We're building our reputation one client at a time by delivering measurable results, not selling vague consulting hours.
          </p>
        </>
      )
    },
    {
      question: "What if you don't find 25% in savings?",
      answer: (
        <>
          <p>
            <strong>Then you don't pay.</strong> That's our guarantee.
          </p>
          <p>
            Our Security & Cost Optimization Blueprint is designed to be risk-free. We're confident in our ability to identify significant savings because:
          </p>
          <ul>
            <li>78% of companies overspend on AWS due to common misconfigurations</li>
            <li>Most organizations lack proper tagging, Reserved Instance strategies, and right-sizing</li>
            <li>We've developed proven methodologies for uncovering hidden waste</li>
          </ul>
          <p>
            If we can't find at least 25% in potential cost reductions during our review, the engagement is free. No questions asked.
          </p>
        </>
      )
    },
    {
      question: "How long does the Blueprint engagement take?",
      answer: (
        <>
          <p>
            <strong>Two weeks from start to finish.</strong>
          </p>
          <p>
            Week 1: We audit your infrastructure, analyze costs, and assess security vulnerabilities. You'll receive an initial findings report with quick wins.
          </p>
          <p>
            Week 2: We implement critical optimizations, remediate security issues, set up budget alerts and tagging strategies, and deliver your comprehensive Well-Architected report with a long-term roadmap.
          </p>
          <p>
            Plus, you get 30 days of support included to ensure smooth implementation of our recommendations.
          </p>
        </>
      )
    },
    {
      question: "Do you require long-term contracts?",
      answer: (
        <>
          <p>
            <strong>No.</strong> We believe in earning your business with results, not locking you into contracts.
          </p>
          <p>
            Our Blueprint is a fixed-fee, two-week engagement with clear deliverables. If you want ongoing support afterward, great—but there's zero obligation. Many clients engage us for the Blueprint, implement our recommendations independently, and come back when they need help with new projects.
          </p>
          <p>
            We're consultants, not account managers looking for recurring revenue at your expense.
          </p>
        </>
      )
    },
    {
      question: "What makes you different from other AWS consultancies?",
      answer: (
        <>
          <p>
            <strong>We're specialists, not generalists.</strong>
          </p>
          <p>
            Most consultancies offer generic "cloud services" across multiple providers. We focus exclusively on AWS optimization—security, cost reduction, and performance. This specialization means:
          </p>
          <ul>
            <li>Deep expertise in AWS-specific cost optimization strategies</li>
            <li>Fixed-fee engagements with concrete deliverables, not open-ended hourly billing</li>
            <li>Focus on immediate ROI, not theoretical recommendations</li>
            <li>Boutique service with direct access to senior engineers (no junior staff padding hours)</li>
          </ul>
          <p>
            We do one thing exceptionally well: make your AWS infrastructure lean, secure, and profitable.
          </p>
        </>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need to know about working with us
          </Subtitle>
        </SectionHeader>

        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Question
                onClick={() => toggleFAQ(index)}
                $isOpen={openIndex === index}
              >
                {faq.question}
                <FaChevronDown />
              </Question>
              <AnimatePresence>
                {openIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </Section>
  );
};

export default FAQSection;
