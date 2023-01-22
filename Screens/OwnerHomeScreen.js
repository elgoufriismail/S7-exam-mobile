import React from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from "@react-navigation/core"




const OnwerHomeScreen = () => {
const navigation = useNavigation();
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(()=>{
            navigation.replace("LoginScreen");
        })
    }

    return (
        <View>
            <Text>Home Screen { getAuth().currentUser?.email  } </Text>
            <Button title='sign out' onPress={handleSignOut} />
        </View>
    )
}

export default OnwerHomeScreen

const styles = StyleSheet.create({

})