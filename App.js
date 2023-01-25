import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnwerHomeScreen from './Screens/OwnerHomeScreen.js';
import LoginScreen from './Screens/loginScreen.js';
import { Header } from '@rneui/base';
import AddHotel from './Screens/AddHotel.js';
import Wizard from './components/Wizard.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={ {headerShown: false} } name="firstPage" component={FirstScreen} />
        <Stack.Screen options={{headerShown:false}} name='LoginScreen' component={LoginScreen} />
        <Stack.Screen options={
          {
            headerTitle: "home",
            headerRight: () => (
              <Button title="sign out"/>
            )
          }
        } name='OwnerHomeScreen' component={OnwerHomeScreen} />
        <Stack.Screen name='addHotel' component={AddHotel} />
        <Stack.Screen name='Wizard' component={Wizard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcommingText}>Join Us As</Text>
      <View style={{flexDirection:'row', width:330, justifyContent:'space-evenly'}}>
      <TouchableOpacity>
          <View style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>TOURIST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
            navigation.navigate('LoginScreen')
            }>
          <View style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>OWNER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


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
