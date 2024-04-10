import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageUploadButton from '../components/ImageUploadButton';
import UploadedImage from '../components/UploadedImage';


const MainScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const handleImageUpload = (uri) => {
        setImageUri(uri);
    };

    return (
        
            <View style={styles.container}>
            <Text style={styles.text}>Upload an Image</Text>
            <ImageUploadButton onImageUpload={handleImageUpload} />
            {imageUri && <UploadedImage imageUri={imageUri} />}
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default MainScreen;
