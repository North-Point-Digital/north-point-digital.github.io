import React, { useState } from 'react';
import { trackFormSubmission } from '../utils/analytics';

interface SimpleContactFormProps {
  onSubmit?: (data: any) => void;
}

const SimpleContactForm: React.FC<SimpleContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (onSubmit) {
      onSubmit(formData);
    }

    trackFormSubmission('contact_form', 'contact');
    setShowSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-6 max-w-[600px] mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[#555] mb-2 font-medium">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="px-4 py-3 border border-[#ddd] rounded focus:border-primary hover:border-primary outline-none transition-all duration-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#555] mb-2 font-medium">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="px-4 py-3 border border-[#ddd] rounded focus:border-primary hover:border-primary outline-none transition-all duration-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="company" className="text-[#555] mb-2 font-medium">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={isSubmitting}
            className="px-4 py-3 border border-[#ddd] rounded focus:border-primary hover:border-primary outline-none transition-all duration-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-[#555] mb-2 font-medium">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="px-4 py-3 border border-[#ddd] rounded focus:border-primary hover:border-primary outline-none transition-all duration-300 resize-y min-h-[120px]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-primary text-white border-none rounded font-semibold text-lg cursor-pointer transition-all duration-300 hover:bg-[#5661d5] hover:scale-[1.02] active:scale-[0.98] disabled:bg-[#ccc] disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {showSuccess && (
        <div className="p-4 bg-[#d4edda] text-[#155724] rounded text-center mt-4 animate-[fadeInUp_0.3s_ease-out]">
          Thank you! Your message has been sent successfully.
        </div>
      )}
    </>
  );
};

export default SimpleContactForm;
