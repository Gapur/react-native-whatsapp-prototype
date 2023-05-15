import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export default function App(): JSX.Element {
  const hideBootSplash = () => RNBootSplash.hide({fade: true, duration: 500});

  useEffect(() => {
    hideBootSplash();
    console.log('BootSplash has been hidden successfully');
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Welcome to WhatsApp</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
