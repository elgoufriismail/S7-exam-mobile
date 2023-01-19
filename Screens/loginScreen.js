import react, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'




const LoginScreen = ({navigation}) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')


    return (
      <KeyboardAvoidingView
      style = {styles.container}
      behavior="padding" >
      <View
      style = {styles.inputContainer}>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail}
            style={styles.input}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword}
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style = {styles.buttonContainer}>

      <TouchableOpacity>
      <View style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Register</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => 
            navigation.navigate('OwnerHomeScreen')
            }>
          <View style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Login</Text>
          </View>
        </TouchableOpacity> 

      </View>
      </KeyboardAvoidingView>
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%',
        paddingBottom: 50,
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
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
      buttonContainer:{
        flexDirection:'row',
        width:330,
        justifyContent:'space-evenly'
      },
      buttonSecondaryText:{
        color:'#18314F',
        textAlign:'center',
      },
      buttonPrimaryText:{
        color:'white',
        textAlign: 'center',
      }

})