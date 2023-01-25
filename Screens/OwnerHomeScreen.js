import React, {useState, useEffect} from 'react'
import { Button, FlatList, StyleSheet, Text, View} from 'react-native'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from "@react-navigation/core"
import { TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBfl4LHG75EcoHXsPmCb-nvs-KMBtHLw24",
    authDomain: "s7-exam-mobile.firebaseapp.com",
    projectId: "s7-exam-mobile",
    storageBucket: "s7-exam-mobile.appspot.com",
    messagingSenderId: "262660907853",
    appId: "1:262660907853:web:6fc6cb92c48dce57760d04"
  };
  
  const app = initializeApp(firebaseConfig);
const OnwerHomeScreen = () => {

const navigation = useNavigation();
    
    const [hotels,setHotels] = useState([])

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
/*     const getData = async () => {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "hotels"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } */
    const getData = async () => {
        try{
            const db = getFirestore(app);
            const querySnapshot = await getDocs(collection(db, "hotels"));
            /* this.setState(prevState => ({
                values: {
                    ...prevState.values,
                    [name]: value,
                }
            })) */
            let result = [];
            querySnapshot.forEach((doc) => {
                result.push(doc.data());
            });
            setHotels(result)
        }catch(e){
            console.log("smail"+e)
        }
    }
    useEffect(() => {
        /* setHotels([{
            aPartirDe: "400",
            address: "Casa",
            distanceDucentre: "30",
            nom: "amina"
        }]) */
        getData();
    }, []);

    return (
        <View style={{flex: 1}}>
            <FlatList data={hotels} renderItem={({ item }) => (
                <View style={{backgroundColor:'white', margin:4}}>
                <Text>nom hotel: {item.nom}</Text>
                <Text>Prix a partir de: {item.aPartirDe}</Text>
                <Text>Address: {item.address}</Text>
                </View>
            )} />
                
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
        alignSelf: 'center'
        
      },
      buttonPrimaryText:{
        color:'white',
        textAlign: 'center',
      }

})