import React from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from "@react-navigation/core"
import { getFirestore } from "firebase/firestore";
import { TouchableOpacity } from 'react-native';


const OnwerHomeScreen = () => {

const navigation = useNavigation();

    const handleSignOut = () => {

        const auth = getAuth();
        signOut(auth).then(()=>{
            navigation.replace("LoginScreen");
        })

    }

    navigation.setOptions({
        headerRight: () => (
            <Button title="sign out" onPress={handleSignOut}/>
        )
    })

    const handlAddHotel = () => {
        navigation.navigate("addHotel")
    }

    return (

        <View>
            <TouchableOpacity style={styles.buttonPrimary} onPress={handlAddHotel} >
                <Text style={styles.buttonPrimaryText} >add Hotel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnwerHomeScreen

const styles = StyleSheet.create({
    buttonPrimary:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#18314F',
        width: '90%',
        
      },
      buttonPrimaryText:{
        color:'white',
        textAlign: 'center',
      }

})