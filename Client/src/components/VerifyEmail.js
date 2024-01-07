import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import load from '../images/load.gif';
import axios from 'axios';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailToken = searchParams.get('emailToken');
  const navigate = useNavigate();
  useEffect(() => {
    console.log(emailToken);
    if (emailToken) { // Only execute verification logic if emailToken exists
      console.log("Im here 1");
      const verifyEmailToken = async () => {
        console.log("Im here 2");
        try {
          setIsLoading(true);
          console.log("Im here 3");
          const response = await axios.get(`http://localhost:8080/buyerreg/register/email-token/${emailToken}`);
          console.log(response);
          const userData = response.data;
          console.log(userData);
          if (!userData) {
            console.log("im error");
            setError(true); // Invalid token or user not found
            return;
          }
          console.log("im here 4")
          const verifyResponse = await axios.post('http://localhost:8080/buyerreg/verify-email', {
            emailToken: emailToken,
          });
          console.log(verifyResponse);
          if (verifyResponse.status === 200) {
            console.log("im here 5")
            setVerificationSuccess(true); // Successful verification
            setTimeout(() => navigate('/login'), 1000); 
          }
        } catch (error) {
          setError(true); // Network error or other issues
          console.log("this is error");
          console.error('Email verification failed:', error);
         
        } finally {
          setIsLoading(false);
        }
      };

      verifyEmailToken();
    }
  }, [emailToken]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoading ? (
        <img src={load} style={{ height: '50px' }} alt="Loading" />
      ) : error ? (
        <h2>Verification failed. Invalid token or network error.</h2>
      ) : verificationSuccess ? (
        <div>
          <h2>Verification Successful!</h2>
          <p>Your email has been successfully verified. Proceed to Login</p>
          <img src={load} style={{ height: '50px' }} alt="Loading" />
        </div>
      ) : (
        <>
          <h2>Check Your Email for Verification</h2>
          <p>Please follow the instructions sent to your email to complete the verification process.</p>
          <img src={load} style={{ height: '50px' }} alt="Loading" />
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
