import { RentalRequestFormData } from '../components/ramprequestform/types';
import axios from 'axios';

export interface RentalRequestResponse {
  // Define the response structure here
  success: boolean;
  message: string;
}

export async function submitRentalRequest(data: RentalRequestFormData) {
  try {
    // Update the URL to point to your backend service
    const response = await axios.post('https://samedayramps-016e8e090b17.herokuapp.com/api/rental-requests', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting rental request:', error);
    throw new Error('Failed to submit rental request');
  }
}