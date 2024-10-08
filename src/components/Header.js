import React from 'react';
import './styles/Header.css';


const Header = () => {
  return (
    <div className="header-container">
    
      <div className="content">
        <div className="text-section">
            
          <h1>LL.B. Programs</h1>
          <p>Amongst Top 10 Private Law Colleges in India</p>
          <p>LLB Admission based on Class 12th Board Marks</p>
        </div>

        <div className="form-section">
          <h2>Admissions Open for 2021</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Mobile Number" />
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select>
              <option>Nationality?</option>
              <option>Indian Resident</option>
              <option>NRI/International Students</option>
            </select>
            <select>
              <option>Select Course</option>
              <option>LLB</option>
              <option>LLM</option>
            </select>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I accept the Terms & Conditions</label>
            <button type="submit">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
