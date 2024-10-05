import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          We use cookies to improve your experience on our site. By accepting, you agree to our use of cookies. 
          <a href="/privacy-policy" className="underline ml-1">Learn more</a>.
        </p>
        <div className="flex space-x-4">
          <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
            Accept
          </button>
          <button onClick={handleDecline} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;