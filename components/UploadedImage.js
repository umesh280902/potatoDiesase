import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window'); // Get device screen dimensions

const UploadedImage = ({ imageUri }) => {
    return (
        <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode='contain'
        />
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        height: height * 0.6,
        width: width * 0.6,
    },
});

export default UploadedImage;
