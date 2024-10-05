import React from 'react';

export const ConfirmationPage: React.FC = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
      <p className="text-lg mb-6">
        Your ramp request has been submitted successfully. We will contact you shortly to confirm the details.
      </p>
      <p className="text-lg">
        If you have any questions, feel free to reach out to us at <a href="mailto:info@samedayramps.com" className="text-blue-600 hover:underline">info@samedayramps.com</a>.
      </p>
    </div>
  );
};
