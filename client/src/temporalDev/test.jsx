// Escribime un formulario en react estilizado con tailwind que guarde una imagen en firestore con un ancho de 600px y comprimida

import React, { useState } from 'react';

import { storage } from '../../firebase/index';

import { v4 as uuidv4 } from 'uuid';

const AddPhoto = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
        alert('Error al subir la imagen');
      },
      () => {
        // complete function ...
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setUrl(url);
          });
      }
    );
  };
  return (
    <div>
      {' '}
      <progress value={progress} max="100" />{' '}
      <input type="file" onChange={handleChange} />{' '}
      <button onClick={handleUpload}>Subir</button> <br />{' '}
      <img src={url || 'https://via.placeholder.com/400x300'} alt="" />{' '}
    </div>
  );
};
export default AddPhoto;
