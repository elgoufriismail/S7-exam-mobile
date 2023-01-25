import React from "react";
import { View, Text, Button } from "react-native";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

class Step extends React.Component{
    
    state = {
        
    }
    handButtonForm = async () => {
        if (this.props.buttonTitle == "Next") {
            this.props.nextStep();            
        } else {
            try {
                const db = getFirestore();
                const docRef = await addDoc(collection(db,"hotels"), this.props.values/* {
                    nom: "smail",
                    distanceDucentre: 40,
                    location: "monfleuri 1 fes",
                    aPartirDe: 200,
                    Description: "tres bon hotel",
                    image: "image",
                } */)
                this.props.navigation.replace("OwnerHomeScreen")

                
            }catch (e) {
                console.error("error inserting the data: ", e);    
            }
        }

    }
    render(){
        return (
            <View style={{flex:1}}>
                {this.props.children({
                    onChangeValue: this.props.onChangeValue,
                    values: this.props.values
                })}
                <Button title = {this.props.buttonTitle} onPress={this.handButtonForm}/>
            </View>
        )
    }
}

class Wizard extends React.Component {
    static Step = (props) => <Step {...props}/>
    state = {
        index: 0,
        values: {
            ...this.props.initialValues
        }
    }

    _nextStep = () => {
        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }


    _onChangeValue = (name, value) =>{
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value,
            }
        }))
    }
    render(){
        console.log(this.state.values);
        return (
            <View style={{flex:1}}>
                {React.Children.map(this.props.children, (el, index) => {
                    if(index == this.state.index){
                        return React.cloneElement(el, {
                            currentIndex: this.state.index,
                            nextStep: this._nextStep,
                            onChangeValue: this._onChangeValue,
                            values: this.state.values,
                            buttonTitle: this.state.index === this.props.children.length - 1 ? "Done":"Next",
                        })
                    }
                    return null;
                })}
            </View>
        )
    }
}


export default Wizard