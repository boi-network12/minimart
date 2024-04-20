import React, { useState } from 'react';
import '../Login/Login.css';
import Cloud from '../../Assets/cloud.jpeg';
import { FaTimes } from 'react-icons/fa';
import { MONTHS, DAYS, YEARS} from '../../Constant/Date'
import { useNavigate, Link } from 'react-router-dom';



const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    month: '',
    day: '',
    year: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    month: '',
    day: '',
    year: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case 'email':
        // Email validation logic
        if(!value.includes('@')){
          error = 'invalid email format'
        }
        break;
      case 'password':
        // Password validation logic
        break;
      case 'name':
        // Name validation logic
        break;
      default:
        break;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleCancel = () => {
    navigate(-1);
  }

  // Inside the renderStep function, after setting formErrors state
const isFormValid = Object.values(formErrors).every(error => error === '');


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='section'>
                    <h2>Create your account</h2>
            <div className="inputField">
               <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
            </div>
               
            <div className="inputField">
                <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
            </div>
            {formErrors.name && <span className='error'>{formErrors.email} </span>}
            <h5>Date of birth</h5>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            <div className="date">
              <select name="month" id="month" value={formData.month} onChange={handleChange}>
                {MONTHS.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))}
              </select>
              <select name="day" id="day" value={formData.day} onChange={handleChange}>
                {DAYS.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select name="year" id="year" value={formData.year} onChange={handleChange}>
                {YEARS.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <span>Already have an account? <Link to='/login'> Login</Link></span>
            <button onClick={nextStep} disabled={!isFormValid}>Next</button>
          </div>
        );

      case 2:
        return (
          <div className="section">
                    <h2>Create your account</h2>
            <div className='inputField'>
            <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
          </div>
          {formErrors.name && <span className='error'>{formErrors.password} </span>}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='containerF'>
      <form onSubmit={handleSubmit}>
       <FaTimes className='cancelIcon' onClick={handleCancel}/>
        <img src={Cloud} alt="" />
        {renderStep()}
      </form>
      
    </div>
  );
};

export default SignUp;
