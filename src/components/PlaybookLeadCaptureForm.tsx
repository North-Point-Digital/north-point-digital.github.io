import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #555;
  margin-bottom: 0.5rem;
  font-weight: 500;
  
  span {
    color: #dc3545;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: #667eea;
    outline: none;
  }

  &.error {
    border-color: #dc3545;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: #667eea;
    outline: none;
  }

  &.error {
    border-color: #dc3545;
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #5661d5;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  padding: 1.5rem;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  color: #155724;
  text-align: center;
  font-weight: 500;
`;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  companyName: string;
  industry: string;
}

interface PlaybookLeadCaptureFormProps {
  onSubmit: (data: FormData) => void;
}

const PlaybookLeadCaptureForm: React.FC<PlaybookLeadCaptureFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    companyName: '',
    industry: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Telecommunications',
    'Energy',
    'Transportation',
    'Hospitality',
    'Media & Entertainment',
    'Real Estate',
    'Professional Services',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country/Region is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <SuccessMessage>
        Thank you! Your download will begin shortly.
      </SuccessMessage>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormGroup>
          <Label>
            First Name <span>*</span>
          </Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>
            Last Name <span>*</span>
          </Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label>
          Email Address <span>*</span>
        </Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormGroup>

      <FormRow>
        <FormGroup>
          <Label>
            Company Name <span>*</span>
          </Label>
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={errors.companyName ? 'error' : ''}
          />
          {errors.companyName && <ErrorMessage>{errors.companyName}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>
            Country/Region <span>*</span>
          </Label>
          <Input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? 'error' : ''}
          />
          {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label>
          Industry <span>*</span>
        </Label>
        <Select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={errors.industry ? 'error' : ''}
        >
          <option value="">Select an industry</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </Select>
        {errors.industry && <ErrorMessage>{errors.industry}</ErrorMessage>}
      </FormGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : 'Download Playbook'}
      </SubmitButton>
    </Form>
  );
};

export default PlaybookLeadCaptureForm;
