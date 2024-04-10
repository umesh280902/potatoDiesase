import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/Mainscreen'
import ImageProvider from './context/ImageContext';
export default function App() {
  return (
    <ImageProvider>
      <View style={styles.container}>
      <MainScreen/>
      <StatusBar style="auto" />
    </View>
    </ImageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
