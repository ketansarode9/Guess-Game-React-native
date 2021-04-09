import React , {useState} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, ScrollView,Text, View , Button , Image,TextInput , ImageBackground} from 'react-native';
const Header = (props) => {

    return (
      
      <View style = { styles.header}>
        <Text style = { styles.headerTitle}>{props.title} </Text>
        
        </View>
    );
  }

  
const styles = StyleSheet.create({
      header: {
      width:'100%' ,
      height: 90 ,
      paddingTop: 36 , 
      backgroundColor: '#f7287b',
      alignItems: 'center',
      justifyContent: 'center'
    } ,
    headerTitle :{
     color: 'black' ,
     fontSize: 18
    },
     button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: "oldlace",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "48%",
      textAlign: "center",
    },
  });
  export default Header ; 