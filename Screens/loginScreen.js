import react, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/core"

const firebaseConfig = {
  apiKey: "AIzaSyBfl4LHG75EcoHXsPmCb-nvs-KMBtHLw24",
  authDomain: "s7-exam-mobile.firebaseapp.com",
  projectId: "s7-exam-mobile",
  storageBucket: "s7-exam-mobile.appspot.com",
  messagingSenderId: "262660907853",
  appId: "1:262660907853:web:6fc6cb92c48dce57760d04"
};

const app = initializeApp(firebaseConfig);




const LoginScreen = ({navigation}) => {
    const auth = getAuth(app);
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    // const navigator = useNavigation();

    useEffect (() => {
      const auth = getAuth(app);
      onAuthStateChanged(auth,user => {
        if (user) {
          navigation.replace("OwnerHomeScreen")
        }
      })
    }, [])

    const handleSignUp = () => {
      const auth = getAuth(app);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          console.log('register with the userName',userCredential.user.email)
        })
        .catch((error) => {
          if (error.code == 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
          }
          console.error(error);
        })
    }
    const handleLogin = () => {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth,email.trim(),password.trim())
      .then(userCredential => {
        const user = userCredential.user;
        console.log('loged in with the userName' , user.email);
      })
      .catch(error => alert(error.message))
    }
    return (
      <KeyboardAvoidingView
      style = {styles.container}
      behavior="height">
      <View
      style = {styles.inputContainer}>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style = {styles.buttonContainer}>

      <TouchableOpacity onPress={handleSignUp}>
      <View style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Register</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={handleLogin} >
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