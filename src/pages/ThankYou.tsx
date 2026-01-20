import React, { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaEnvelope, FaArrowLeft, FaClock, FaUser, FaVideo } from 'react-icons/fa';
import { trackGoogleAdsConversion } from '../utils/analytics';
import SEO from '../components/SEO';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
`;

const SuccessCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 4rem 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const SuccessIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const InfoSection = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: left;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: #667eea;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.75rem 0;
    color: #666;
    line-height: 1.6;
    padding-left: 2rem;
    position: relative;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
`;

const MeetingDetailsCard = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 2.5rem;
  margin: 2rem 0;
  color: white;
  text-align: left;
`;

const MeetingDetailsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  
  svg {
    font-size: 1.8rem;
  }
`;

const DetailRow = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    margin-top: 0.25rem;
    flex-shrink: 0;
    font-size: 1.3rem;
    opacity: 0.9;
  }
`;

const DetailContent = styled.div`
  flex: 1;
  
  strong {
    display: block;
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  span {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const formatDateTime = (isoString: string): { date: string; time: string } => {
  try {
    const date = new Date(isoString);
    const dateStr = date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const timeStr = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    return { date: dateStr, time: timeStr };
  } catch {
    return { date: isoString, time: '' };
  }
};

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const meetingDetails = useMemo(() => {
    const eventStartTime = searchParams.get('event_start_time');
    const eventEndTime = searchParams.get('event_end_time');
    const inviteeName = searchParams.get('invitee_name');
    const inviteeEmail = searchParams.get('invitee_email');
    const eventTypeName = searchParams.get('event_type_name');

    if (!eventStartTime) return null;

    const startTime = formatDateTime(eventStartTime);
    const endTime = eventEndTime ? formatDateTime(eventEndTime) : null;

    return {
      name: inviteeName,
      email: inviteeEmail,
      eventType: eventTypeName || 'Free Consultation',
      startDate: startTime.date,
      startTime: startTime.time,
      endTime: endTime?.time,
    };
  }, [searchParams]);

  useEffect(() => {
    trackGoogleAdsConversion();
  }, []);

  return (
    <PageWrapper>
      <PageContainer>
        <SEO
          title="Thank You for Booking | North Point Digital"
          description="Your consultation with North Point Digital is confirmed. Check your email for calendar details and joining instructions."
          canonical="https://northpointdigital.com/thank-you"
          noIndex={false}
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Reservation",
            reservationStatus: "https://schema.org/ReservationConfirmed",
            provider: {
              "@type": "Organization",
              name: "North Point Digital"
            }
          }}
        />
        <SuccessCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SuccessIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
          >
            <FaCheckCircle />
          </SuccessIcon>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Thank You for Booking!
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {meetingDetails 
              ? `Hi ${meetingDetails.name || 'there'}, your booking is confirmed! We're excited to speak with you.`
              : "We've received your booking request and we're excited to speak with you. You should receive a confirmation email shortly with all the details."
            }
          </Subtitle>

          {meetingDetails && (
            <MeetingDetailsCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <MeetingDetailsTitle>
                <FaCalendarCheck />
                Meeting Confirmation
              </MeetingDetailsTitle>
              
              <DetailRow>
                <FaClock />
                <DetailContent>
                  <strong>Date & Time</strong>
                  <span>{meetingDetails.startDate}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 400, marginTop: '0.25rem' }}>
                    {meetingDetails.startTime}
                    {meetingDetails.endTime && ` - ${meetingDetails.endTime}`}
                  </span>
                </DetailContent>
              </DetailRow>

              {meetingDetails.eventType && (
                <DetailRow>
                  <FaVideo />
                  <DetailContent>
                    <strong>Meeting Type</strong>
                    <span>{meetingDetails.eventType}</span>
                  </DetailContent>
                </DetailRow>
              )}

              {meetingDetails.name && (
                <DetailRow>
                  <FaUser />
                  <DetailContent>
                    <strong>Attendee</strong>
                    <span>{meetingDetails.name}</span>
                    {meetingDetails.email && (
                      <span style={{ fontSize: '0.95rem', fontWeight: 400, marginTop: '0.25rem', opacity: 0.9 }}>
                        {meetingDetails.email}
                      </span>
                    )}
                  </DetailContent>
                </DetailRow>
              )}
            </MeetingDetailsCard>
          )}

          <InfoSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <InfoTitle>
              <FaCalendarCheck />
              What Happens Next?
            </InfoTitle>
            <InfoList>
              <li>You'll receive a calendar confirmation email with meeting details</li>
              <li>We'll send you a brief pre-call questionnaire to help us prepare</li>
              <li>Our team will review your requirements before the call</li>
              <li>During the call, we'll discuss how we can help save money on your AWS bill</li>
            </InfoList>
          </InfoSection>

          <InfoSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <InfoTitle>
              <FaEnvelope />
              Need to Make Changes?
            </InfoTitle>
            <InfoList>
              <li>Check your email for the calendar confirmation</li>
              <li>Use the reschedule link in the email if you need to change the time</li>
              <li>Contact us at contact@northpointdigital.com for any questions</li>
            </InfoList>
          </InfoSection>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Home
            </Button>
            <SecondaryButton
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft />
              Go Back
            </SecondaryButton>
          </ButtonGroup>
        </SuccessCard>
      </PageContainer>
    </PageWrapper>
  );
};

export default ThankYou;
