import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('First Rank');
  const [photo, setPhoto] = useState(null);
  const [idNumber, setIdNumber] = useState(`#${Math.floor(100000 + Math.random() * 900000)}`);

  const navigate = useNavigate();

  // const handlePhotoUpload = (e) => {
  //   setPhoto(URL.createObjectURL(e.target.files[0]));
  // };
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, rank, photo, idNumber };
    navigate('/result', { state: formData });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo</label>
          <input
            type="file"
            id="photo"
            className="form-control"
            accept="image/*"
            onChange={handlePhotoUpload}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rank" className="form-label">Rank</label>
          <select
            id="rank"
            className="form-select"
            value={rank}
            onChange={(e) => setRank(e.target.value)} required>
            <option>First Rank</option>
            <option>Second Rank</option>
            <option>Third Rank</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
