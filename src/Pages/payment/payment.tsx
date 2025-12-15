import React from 'react';
import './payment.css';

const Payment: React.FC = () => {
  return (
    <div className="payment-container">
      <div className="payment-content">
        <div className="payment-header">
          <h1 className="payment-title">
            Payment Details
          </h1>
          <p className="payment-subtitle">
            Bank account information for registration fee payment
          </p>
        </div>

        <div className="payment-main">
          <div className="payment-card">
            <div className="bank-header">
              <h3>Bank Account Details</h3>
            </div>
            <div className="bank-details">
              <div className="detail-row highlight-1 curve">
                <span className="detail-label-1">Account Number:</span>
                <span className="detail-value-1">1481267367</span>
              </div>
              <div className="detail-row highlight">
                <span className="detail-label">Type of Account:</span>
                <span className="detail-value">Saving A/C</span>
              </div>
              <div className="detail-row highlight-1">
                <span className="detail-label-1">Account Name:</span>
                <span className="detail-value-1">PSG Centre for Nonformal and Continuing Education</span>
              </div>
              <div className="detail-row highlight">
                <span className="detail-label">Bank:</span>
                <span className="detail-value">Central Bank of India</span>
              </div>
              <div className="detail-row highlight-1">
                <span className="detail-label-1">Branch:</span>
                <span className="detail-value-1">Peelamedu</span>
              </div>
              <div className="detail-row highlight">
                <span className="detail-label">IFSC:</span>
                <span className="detail-value">CBIN0280913</span>
              </div>
              <div className="detail-row highlight-1">
                <span className="detail-label-1">MICR Code:</span>
                <span className="detail-value-1">641016006</span>
              </div>
              <div className="detail-row highlight curve-1">
                <span className="detail-label">Bank Branch Address:</span>
                <span className="detail-value">Peelamedu, Coimbatore, 641004</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
