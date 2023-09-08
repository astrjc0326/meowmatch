import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './components/LogIn';


export default function App() {
  return (
    <View style={styles.container}>
      <LogIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
