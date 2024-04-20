import React, { useState } from 'react';
import './Login.css';
import Cloud from '../../Assets/cloud.jpeg';
import { FaTimes } from 'react-icons/fa';
import { MONTHS, DAYS, YEARS} from '../../Constant/Date'
import { useNavigate, Link } from 'react-router-dom';



const Login = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();

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

  const handleCancel = () => {
    navigate(-1);
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='section'>
                    <h2>Create your account</h2>
            <div className="inputField">
                <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
            </div>
            
            <span>Don't have any account? <Link to='/signUp'>sign Up</Link></span>
            <button onClick={nextStep}>Next</button>
          </div>
        );

      case 2:
        return (
          <div className="section">
                    <h2>Create your account</h2>
            <div className='inputField'>
            <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
          </div>
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

export default Login;
