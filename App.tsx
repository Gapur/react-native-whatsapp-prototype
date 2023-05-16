import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export default function App(): JSX.Element {
  const hideBootSplash = () => RNBootSplash.hide({fade: true, duration: 500});

  useEffect(() => {
    hideBootSplash();
    console.log('BootSplash has been hidden successfully');
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/whatsapp-wallpaper.jpg')}
        resizeMode="stretch"
        style={styles.wallpaper}>
        <SafeAreaView style={styles.saveArea}>
          <Image
            source={require('./assets/whatsapp-logo.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>Welcome to WhatsApp</Text>

          <TextInput style={styles.input} />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveArea: {
    flex: 1,
    alignItems: 'center',
  },
  wallpaper: {
    flex: 1,
  },
  logo: {
    width: 132,
    height: 132,
    marginTop: '32%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 28,
  },
  input: {
    height: 40,
    width: 220,
    fontSize: 17,
    backgroundColor: '#F7F6F4',
    borderWidth: 1,
    borderColor: '#DEDDDB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 36,
  },
  button: {
    width: 180,
    backgroundColor: '#19AE61',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 68,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
