import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './ImageModal.css'

interface ArticlesInt {
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
  image: ArticlesInt | null;
}

const ImageModal:React.FC<Props> = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();  
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <div className="modal-content">
        <img src={image && image.urls ? image.urls.regular : ''} 
                alt={image && image.alt_description ? image.alt_description : 'Image description'} 
                className="modal-image"  />
        <button className="close-btn" onClick={handleClose}>X</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
