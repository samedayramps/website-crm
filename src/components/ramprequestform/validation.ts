import { RentalRequestFormData, FormErrors } from './types';

export const validateContactInfo = (formData: RentalRequestFormData): FormErrors => {
  const errors: FormErrors = { customerInfo: {} };

  if (!formData.customerInfo.firstName) {
    errors.customerInfo!.firstName = 'First name is required';
  }
  if (!formData.customerInfo.lastName) {
    errors.customerInfo!.lastName = 'Last name is required';
  }
  if (!formData.customerInfo.email) {
    errors.customerInfo!.email = 'Email is required';
  }
  if (!formData.customerInfo.phone) {
    errors.customerInfo!.phone = 'Phone number is required';
  }

  return errors;
};