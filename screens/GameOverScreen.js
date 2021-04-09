import React , {useState} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, ScrollView,Text, View , Button , Image,TextInput , ImageBackground} from 'react-native';
const  GameOverScreen = props => {

    return (
    <View style = { styles.screen}>  
     <Text> Game is Over !!</Text>
     <Text> Number of Rounds : {props.roundsNumber}</Text>
     <Text> Guesss number was : {props.useNumber}</Text>
     
    </View>
    );
  }
  
const styles = StyleSheet.create({
    screen:{
      flex:1 ,
      alignItems: 'center',
      justifyContent: 'center'
    }


} );

  export default GameOverScreen;
