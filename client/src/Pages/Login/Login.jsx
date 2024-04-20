import React, { useState } from 'react';
import './Login.css';
import Cloud from '../../Assets/cloud.jpeg';
import { FaTimes } from 'react-icons/fa';
import { MONTHS, DAYS, YEARS} from '../../Constant/Date'


const Login = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='inputField'>
            <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
            <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
            <h5>Date of birth</h5>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            <div className="date">
              <select name="month" id="month" value={formData.email} onChange={handleChange}>
                {MONTHS.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))}
              </select>
              <select name="day" id="day" value={formData.email} onChange={handleChange}>
                {DAYS.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select name="year" id="year" value={formData.email} onChange={handleChange}>
                {YEARS.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <button onClick={nextStep}>Next</button>
          </div>
        );

      case 2:
        return (
          <div className='inputField'>
            <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='containerF'>
      <FaTimes className='cancelIcon' />
      <form onSubmit={handleSubmit}>
        <img src={Cloud} alt="" />
        <h2>Step {step}</h2>
        {renderStep()}
      </form>
      
    </div>
  );
};

export default Login;
