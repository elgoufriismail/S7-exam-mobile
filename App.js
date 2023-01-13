import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcommingText}>Join Us As</Text>
      <StatusBar style="auto" />
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
  welcommingText:{
    fontFamily: 'Monospace',
    fontSize: 40,
    color: '#18314F',
  },
});
