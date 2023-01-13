import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcommingText}>Join Us As</Text>
      <View style={{flexDirection:'row', width:330, justifyContent:'space-evenly'}}>
        <TouchableOpacity>
          <View style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>TOURIST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>OWNER</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 50,
  },
  buttonSecondary:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'white',
    width: 140,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonPrimary:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#18314F',
    width: 140,
    
  },
  buttonSecondaryText:{
    color:'#18314F',
    textAlign:'center',
  },
  buttonPrimaryText:{
    color:'white',
    textAlign: 'center',
  }
});
