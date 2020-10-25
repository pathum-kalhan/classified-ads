import { useState } from 'react';
import * as Yup from 'yup';
import { storage } from '../firebase/firebase';
import { useSelector } from 'react-redux';

const useNewClassified = () => {
  const [isImageUploading, setUpload] = useState(false);

  const categories = useSelector((state) => state.classified.categories);

  const handleImageAsFile = async (e, setFieldValue) => {
    try {
      setUpload(true);
      const image = e.target.files[0];
      const storageRef = storage.ref();
      const fileRef = storageRef.child(`photos/${image.name}`);
      const uploadTaskSnapshot = await fileRef.put(image);
      const imageUrl = await uploadTaskSnapshot.ref.getDownloadURL();

      setFieldValue('image', imageUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setUpload(false);
    }
  };

  //initial values
  const initialValues = {
    image: '',
    category: '',
    description: '',
    isFavorite: false,
    title: '',
  };

  // validation schema
  let validationSchema = Yup.object().shape({
    image: Yup.string().required(),
    title: Yup.string()
      .required('Title is required.')
      .max(10, 'Max length for the title is 10.'),
    category: Yup.string().required('Category is required.'),
    description: Yup.string()
      .required('Description is required.')
      .max(150, 'Max length for the description is 150.'),
  });
  return {
    validationSchema,
    initialValues,
    isImageUploading,
    handleImageAsFile,
    categories,
  };
};

export default useNewClassified;
