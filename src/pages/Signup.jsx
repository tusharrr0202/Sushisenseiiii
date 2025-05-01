import React, { useState } from 'react';
import axios from 'axios'; // You can use fetch if you want
import '../styles/Signupmodal.css';



const SignupModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log('Attempting sign up with:', { name, email, password, confirmPassword });

    if (password !== confirmPassword) {
      setRegistrationFailed(true);
      setRegistrationError('Passwords do not match');
      return;
    }

    try {
      const signupEndpoint = 'https://cors-anywhere.herokuapp.com/https://testapp.gokidogo.com/webapi/api.php/customersignup';


      const response = await axios.post(signupEndpoint, {
        name,
        email,
        password
      });
      
      const data = await response.json();

      if (data.status === 'success') {
        alert('Signup successful!');
      } else {
        setRegistrationFailed(true);
        setRegistrationError(data.message || 'Registration failed');
      }
    } catch (error) {
      setRegistrationFailed(true);
      setRegistrationError('Something went wrong');
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type="submit">Sign Up</button>

      {registrationFailed && <p style={{ color: 'red' }}>{registrationError}</p>}
    </form>
  );
};

export default SignupModal;
