import React , {useState} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, ScrollView,Text, View , Button , Image,TextInput , ImageBackground} from 'react-native';

const Input = (props) => {

    return (
     <TextInput {...props} style = {{ ...styles.input , ...props.style}}  /> 
    );
  }
  
const styles = StyleSheet.create({
    input:{
      height:30 , 
      width: 70 ,
      borderBottomColor: 'grey',
      borderWidth: 1,
      marginVertical: 10 ,
      textAlign: 'center'
    }


} );

  export default Input;
