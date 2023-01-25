//import { async } from '@firebase/util';
//import { getFirestore, collection, addDoc } from 'firebase/firestore';
import react from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, Button, TouchableOpacity,TextInput } from 'react-native';
import Wizard from '../components/Wizard.js';
//import Step from '../components/Wizard.js';


const AddHotel = ({navigation}) => {

//    const db = getFirestore();
/*
        const handleAdd = async () => {
        try {
            const docRef = await addDoc(collection(db,"hotels"),{
                nom: "smail",
                distanceDucentre: 40,
                location: "monfleuri 1 fes",
                aPartirDe: 200,
                Description: "tres bon hotel",
                image: "image",
            })
        }catch (e) {
            console.error("error inserting the data: ", e);    
        }
    } */
   
    return (
        
        <KeyboardAvoidingView style={{flex:1}}>
            <Wizard initialValues={{
                nom : '',
                distanceDucentre: 0,
                address: '',
                aPartirDe: '',
                image: '',
                Description: ''
            }}>
                <Wizard.Step navigation={navigation}>
                    {({onChangeValue,values}) => (
                        <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="nom"
                            value={values.nom}
                            onChangeText={text => onChangeValue('nom',text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="distance Du centre"
                            value={values.distanceDucentre}
                            onChangeText={text => onChangeValue('distanceDucentre',text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="address"
                            value={values.address}
                            onChangeText={text => onChangeValue('address',text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="prix a partir de"
                            value={values.aPartirDe}
                            onChangeText={text => onChangeValue('aPartirDe',text)}
                            style={styles.input}
                        />
                        </View>

                    )}
                </Wizard.Step>
                <Wizard.Step navigation={navigation}>
                    {({onChangeValue,values}) => (
                        <View style={{flex:1}}>
                        <TextInput
                            placeholder="Description"
                            value={values.Description}
                            onChangeText={text => onChangeValue('Description',text)}
                            style={styles.input}
                        />
                        </View>

                    )}
                </Wizard.Step>
                {/* <Wizard.Step>
                {({onChangeValue,values}) => (
                    <View style={{backgroundColor:'pink', flex:1}}>
                    <TextInput
                        placeholder="image"
                        value={values.image}
                        onChangeText={text => onChangeValue('image',text)}
                        style={styles.input}
                    />
                    </View>

                )}
                </Wizard.Step> */}
            </Wizard>
           {/*  <TouchableOpacity onPress={handleAdd}>
                <Text>add</Text>
            </TouchableOpacity> */}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    inputContainer:{
        width: '80%',
        paddingBottom: 50,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },

})


export default AddHotel






