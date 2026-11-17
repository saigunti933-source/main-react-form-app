
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    branch: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ ...formData });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      age: '',
      gender: '',
      branch: '',
    });
    setSubmittedData(null);
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <p className="subtitle">Enter your student details</p>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
        />

        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Branch</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Submitted Student Details</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Branch:</strong> {submittedData.branch}</p>
        </div>
      )}
    </div>
  );
}

export default App;
