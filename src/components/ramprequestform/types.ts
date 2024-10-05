export interface RentalRequestFormData {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  rampDetails: {
    knowRampLength: boolean;
    knowRentalDuration: boolean;
    installTimeframe: string;
    mobilityAids: string[];
    rampLength?: number;
    rentalDuration?: number;
  };
  installAddress: string;
}

export interface FormErrors {
  customerInfo?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  rampDetails?: {
    rampLength?: string;
    rentalDuration?: string;
    installTimeframe?: string;
    mobilityAids?: string;
  };
  installAddress?: string;
}

export type FormChangeHandler = (field: string, value: any, error?: string) => void;