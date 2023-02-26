import React, { useState } from 'react';

const Survey = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [comments, setComments] = useState('');
  const [reviewing, setReviewing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewing(true);
  };

  const handleEdit = () => {
    setReviewing(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  return (
    <div>
      {reviewing ? (
        <div>
          <h2>Review your form</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Comments: {comments}</p>
          <button onClick={handleEdit}>Edit</button>
          <button>Submit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Form</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Age:
            <input type="text" value={age} onChange={handleAgeChange} />
          </label>
          <br />
          <label>
            Gender:
            <select value={gender} onChange={handleGenderChange}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Comments:
            <textarea value={comments} onChange={handleCommentsChange} />
          </label>
          <br />
          <button className='review-button'>Review your form</button>
        </form>
      )}
    </div>
  );
};

export default Survey;
