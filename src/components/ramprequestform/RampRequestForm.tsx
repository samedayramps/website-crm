import React, { useState, useEffect, useCallback } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { ConfirmationPage } from './ConfirmationPage';
import { RentalRequestFormData, FormErrors, FormChangeHandler } from './types';
import { submitRentalRequest, RentalRequestResponse } from '../../services/api';

export const RampRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<RentalRequestFormData>({
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    rampDetails: {
      knowRampLength: false,
      knowRentalDuration: false,
      installTimeframe: '',
      mobilityAids: [],
    },
    installAddress: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange: FormChangeHandler = (field, value, error?) => {
    console.log(`Field changed: ${field}, Value: ${value}, Error: ${error}`);
    setFormData(prevData => {
      const newData = { ...prevData };
      const [section, subField] = field.split('.');
      if (subField) {
        newData[section as keyof RentalRequestFormData] = {
          ...(newData[section as keyof RentalRequestFormData] as object),
          [subField]: value,
        } as any;
      } else {
        (newData as any)[field] = value;
      }
      return newData;
    });

    if (error !== undefined) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        const [section, subField] = field.split('.');
        if (subField) {
          if (!newErrors[section as keyof FormErrors]) {
            newErrors[section as keyof FormErrors] = {} as any;
          }
          (newErrors[section as keyof FormErrors] as any)[subField] = error;
        } else {
          (newErrors as any)[field] = error;
        }
        return newErrors;
      });
    } else {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        const [section, subField] = field.split('.');
        if (subField) {
          if (newErrors[section as keyof FormErrors]) {
            delete (newErrors[section as keyof FormErrors] as any)[subField];
          }
        } else {
          delete (newErrors as any)[field];
        }
        return newErrors;
      });
    }
  };

  const sendHeight = useCallback(() => {
    const height = document.body.scrollHeight;
    console.log(`Sending height: ${height}`);
    window.parent.postMessage({ type: 'setHeight', height }, '*');
  }, []);

  useEffect(() => {
    sendHeight();

    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    resizeObserver.observe(document.body);

    window.addEventListener('load', sendHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('load', sendHeight);
    };
  }, [sendHeight]);

  useEffect(() => {
    sendHeight();
  }, [currentPage, formData, sendHeight]);

  const handleNextPage = () => {
    console.log('Navigating to next page');
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    console.log('Navigating to previous page');
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form', formData);
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const response: RentalRequestResponse = await submitRentalRequest(formData);
        console.log('Form submitted successfully:', response);
        setCurrentPage(2); // Move to the confirmation page
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.error('Form validation failed', errors);
    }
  };

  const validateForm = (): boolean => {
    // Add form validation logic here
    console.log('Validating form', formData);
    return true; // Placeholder for actual validation logic
  };

  return (
    <div className="rental-form-container w-full max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Ramp Request Form</h1>
      {currentPage < 2 ? (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="form-section">
            {currentPage === 0 && (
              <ContactInfoForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onNextPage={handleNextPage}
              />
            )}
            {currentPage === 1 && (
              <RampDetailsForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onPrevPage={handlePrevPage}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
          {submitError && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              Error: {submitError}
            </div>
          )}
        </form>
      ) : (
        <ConfirmationPage />
      )}
    </div>
  );
};

export default RampRequestForm;