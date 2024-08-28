import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const UserResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [photoURL, setPhotoURL] = useState(null);
    const { name, rank, photo, idNumber } = location.state || {};

    useEffect(() => {
        if (!location.state) {
            navigate('/');
        } else {
            setPhotoURL(URL.createObjectURL(photo));
        }
    }, [location.state, navigate, photo]);


    const handleReset = () => {
        navigate('/');
    };

    return (
        <div className="container mt-5 p-4 border rounded" style={{ borderColor: 'blue' }}>
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-3">
                    <div className="photo-box bg-light d-flex align-items-center justify-content-center" style={{ height: '150px', width: '150px' }}>
                        {photo && <img src={photoURL} alt="User Photo" className="img-fluid rounded" />}
                    </div>
                </div>
                <div className="col-sm-12 col-md-9">
                    <p className='mt-2'><strong>ID:</strong> {idNumber}</p>
                    <p><strong>User Name:</strong> {name}</p>
                    <p className='justify-content-center'>
                        Congratulations!! <span style={{ fontSize: '23px', fontWeight: 'bold' }}>You have secured</span> <strong>{rank}</strong>
                    </p>
                </div>
            </div>
            <button onClick={handleReset} className="btn btn-secondary mt-3">Reset</button>
        </div>
    );
};

export default UserResult;
