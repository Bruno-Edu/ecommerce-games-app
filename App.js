import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Hello World</Text>
      <StatusBar style="auto" /> {/* StatusBar serve para mudar cor de ícones no cel.Ex: hora,data,wifi.. */}
    </View>
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
