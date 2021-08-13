import React, {useState} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [imageUri, setImageUri] = useState();

  const options = {
    mediaType: 'photo',
    maxWidth: 1024,
    maxHeight: 768,
    quality: 0.8,
    saveToPhotos: false,
  };

  const pickImage = () => {
    launchCamera(options, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonsContainter}>
        <Button title="Take Image" onPress={pickImage} />
        <Button title="Open Gallery" onPress={openGallery} />
      </View>
      {imageUri && <Image style={styles.image} source={{uri: imageUri}} />}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
  },
});

export default App;
