import React, { useState } from 'react';
import { trackFormSubmission } from '../utils/analytics';

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

const inputStyles = 'px-4 py-3 border border-slate-300 rounded-lg text-base transition-colors duration-200 hover:border-slate-400 focus:border-accent outline-none';
const errorInputStyles = 'border-[#dc3545]';

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
    'Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail',
    'Education', 'Government', 'Telecommunications', 'Energy',
    'Transportation', 'Hospitality', 'Media & Entertainment',
    'Real Estate', 'Professional Services', 'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.country.trim()) newErrors.country = 'Country/Region is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Please select an industry';

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
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      trackFormSubmission('playbook_download', 'lead_capture');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-[#d4edda] border border-[#c3e6cb] rounded text-[#155724] text-center font-medium">
        Thank you! Your download will begin shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-[#555] mb-2 font-medium">
            First Name <span className="text-[#dc3545]">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`${inputStyles} ${errors.firstName ? errorInputStyles : ''}`}
          />
          {errors.firstName && <span className="text-[#dc3545] text-sm mt-1">{errors.firstName}</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-[#555] mb-2 font-medium">
            Last Name <span className="text-[#dc3545]">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`${inputStyles} ${errors.lastName ? errorInputStyles : ''}`}
          />
          {errors.lastName && <span className="text-[#dc3545] text-sm mt-1">{errors.lastName}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-[#555] mb-2 font-medium">
          Email Address <span className="text-[#dc3545]">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputStyles} ${errors.email ? errorInputStyles : ''}`}
        />
        {errors.email && <span className="text-[#dc3545] text-sm mt-1">{errors.email}</span>}
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-[#555] mb-2 font-medium">
            Company Name <span className="text-[#dc3545]">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`${inputStyles} ${errors.companyName ? errorInputStyles : ''}`}
          />
          {errors.companyName && <span className="text-[#dc3545] text-sm mt-1">{errors.companyName}</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-[#555] mb-2 font-medium">
            Country/Region <span className="text-[#dc3545]">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`${inputStyles} ${errors.country ? errorInputStyles : ''}`}
          />
          {errors.country && <span className="text-[#dc3545] text-sm mt-1">{errors.country}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-[#555] mb-2 font-medium">
          Industry <span className="text-[#dc3545]">*</span>
        </label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={`${inputStyles} bg-white cursor-pointer ${errors.industry ? errorInputStyles : ''}`}
        >
          <option value="">Select an industry</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
        {errors.industry && <span className="text-[#dc3545] text-sm mt-1">{errors.industry}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-4 bg-accent text-white border-none rounded-lg font-semibold text-lg cursor-pointer transition-colors duration-200 hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : 'Download Playbook'}
      </button>
    </form>
  );
};

export default PlaybookLeadCaptureForm;
