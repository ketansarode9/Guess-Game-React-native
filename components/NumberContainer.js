import React , {useState} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, ScrollView,Text, View , Button , Image,TextInput , ImageBackground} from 'react-native';
const  NumberConatiner = props => {

    return (
    <View style = { styles.conatiner}> 
     <Text style = { styles.number}> {props.children }</Text>
    </View>
    );
  }
  
const styles = StyleSheet.create({
    conatiner:{
        borderWidth:2,
         borderColor: 'red',
         padding: 10 ,
         borderRadius: 10,
         marginVertical:10 ,
         alignItems: 'center',
         justifyContent: 'center'

    },
    number:{
        color: 'black' , 
        fontSize:22 ,
        textAlign: 'center',
        alignItems: 'center', justifyContent: 'center'
    }



} );

  export default NumberConatiner;
