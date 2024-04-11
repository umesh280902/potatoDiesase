import React, { useContext, useRef, useState } from 'react';
import { Button, Platform, View, Text } from 'react-native';
import { ImageContext } from '../context/ImageContext';
import fetchPotatoDisease from '../api/API';
import { getDocumentAsync } from 'expo-document-picker';

const ImageUploadButton = ({ onImageUpload }) => {
  const { setUri } = useContext(ImageContext);
  const [response, setResponse] = useState(null);
  const inputRef = useRef(null);

  const handleButtonClick = async () => {
    console.log('button pressed')
    if (Platform.OS === 'web') {
      inputRef.current.click();
    } else {
      launchImagePicker();
    }
  };
  const getLastModifiedDate = () => {
    const currentDate = new Date(); // Get the current date and time
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        timeZoneName: 'short' 
    };
    return currentDate.toLocaleString('en-US', options);
};

const getLastModifiedInSeconds = () => {
    const currentDate = new Date(); // Get the current date and time
    return Math.floor(currentDate.getTime() / 1000); // Convert milliseconds to seconds
};

  
  const launchImagePicker = async () => {
    try {
      console.log('main yaha pauch gaya')
      const doc=await getDocumentAsync()
      console.log(doc)
      setUri(doc.assets[0].uri)
      onImageUpload(doc.assets[0].uri)
      // const date=getLastModifiedDate()
      // const time=getLastModifiedInSeconds()      
      // const requestImage={
      //   type:doc.assets[0].mimeType,
      //   name:doc.assets[0].name,
      //   size:doc.assets[0].size,
      //   lastModified:time,
      //   lastModifiedDate:date
      // }
      // console.log(requestImage)
      uploadImage(doc.assets[0])
    } catch (error) {
      console.log(error)
    }
  };

  const uploadImage = async (uri) => { // Change the argument to URI
    try {
      const formData = new FormData();
      formData.append('file', uri);
      const res = await fetchPotatoDisease(formData);
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUri(reader.result);
        onImageUpload(reader.result);
        uploadImage(file); // Pass the URI from the reader
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {Platform.OS === 'web' ? (
        <>
          <Button title="Choose Image" onPress={handleButtonClick} />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </>
      ) : (
        <Button title="Choose Image" onPress={handleButtonClick} />
      )}
      {response && (
        <View>
          <Text>Class : {response.class}</Text>
          <Text>Confidence : {response.confidence}</Text>
        </View>
      )}
    </>
  );
};

export default ImageUploadButton;
