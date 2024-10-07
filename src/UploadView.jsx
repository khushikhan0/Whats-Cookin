import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import App from './components/App.jsx'

function UploadView() {
    const fileInput = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const handleIconClick = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleConfirmClick = () => {
        navigate('/');
    }

    const handleRedoClick = () => {
        setSelectedImage(null);
    }

    return(
        <div className="container">
            <img src="src/imgs/camera.png" className="camera" />
            {selectedImage ? (
                <img 
                    src={selectedImage}
                    alt="selected"
                    className='selected-image'
                />
            ) : (
                <img src="src/imgs/blank_image.png" className="blank-image"/>
            )}
            <img 
                src="src/imgs/x_btn.png"
                className="x-btn"
                alt="go back to home page"
                onClick={handleConfirmClick}
            />
            <img 
                src="src/imgs/confirm_btn.png" 
                className="confirm-btn" 
                alt="confirm image" 
                onClick={handleConfirmClick}
            />
            <img 
                src="src/imgs/redo_btn.png" 
                className="redo-btn" 
                alt="redo image selection"
                onClick={handleRedoClick}
            />
            {selectedImage === null && (
                <img 
                    src="src/imgs/add_photo.png" 
                    className="add-icon" 
                    alt="Add a photo"
                    onClick={handleIconClick}
                />
            )}
            <input 
                type="file"
                ref={fileInput}
                style={{display: 'none'}}
                accept='image/*'
                onChange={handleFileChange}
            />
        </div>
    );
}

export default UploadView;