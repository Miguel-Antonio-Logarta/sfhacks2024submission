import React from 'react';
import Navbar from '../component/navbar';

const ReservePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="reserve-page-container mt-8">
        <h1 className="reserve-page-title text-center mb-4 text-3xl font-bold">Congratulations!</h1>
        <p className="reserve-page-message text-center">
          You have successfully reserved your first driveway. We appreciate your business and look forward to providing you with excellent service.
        </p>
      </div>
    </div>
  );
};

export default ReservePage;