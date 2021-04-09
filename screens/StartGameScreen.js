import React , {useState} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, ScrollView,Text, View , Button ,Alert , Image,TextInput , ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import GameScreen from './GameScreen';
const StartGameScreen = props => {
  const [enteredValues , setEnteredValue] = useState('');
  const [confirmValue , setConfirmValue] = useState(false);
  const [selectedNumber , setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g ,''));
  }
   const resetInputHandler = ()=>
   {
     setEnteredValue('');
     setConfirmValue(false);
   };

   const confirmInputHnadler =()=>
   {      const chosenNumber  = parseInt(enteredValues);
          if(chosenNumber<=0 || isNaN(chosenNumber) || chosenNumber>99)
          {
            Alert.alert('Number not valid' ,  'Please enter the number in the range of 1 - 99' , [{text: 'Okay' , style: 'destructive' , onPress: resetInputHandler}]);
           return ;
          }

           setConfirmValue(true);
           setSelectedNumber(parseInt(enteredValues));
           setEnteredValue('');
           Keyboard.dismiss();

   };
   let confirmoutput ;
   if(confirmValue)
   {
     confirmoutput = (
        <View style = {styles.summaryContainer}>
        <Text style = {{textAlign:'center'}}> You selected </Text> 
       
            <NumberContainer> {selectedNumber}</NumberContainer>
            <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)} />
        </View>
      
      )
   }
    return (
      
      <TouchableWithoutFeedback onPress= {()=> {
        Keyboard.dismiss();
      }}>
      
      <View style = { styles.screen}>
        <Text styyle = { styles.title} > Start a New Game </Text>
        <View style = { styles.inputContainer}>
            <Text> Select a Number </Text>
            <Input  style = {styles.input}  blurOnSubmit keyboardType = "number-pad" maxLength={2} onChangeText ={numberInputHandler} value = {enteredValues} />
            <View style = { styles.buttonContainer}>
               <View  style = { styles.button}>
                <Button title = "Reset" onPress = {() => {resetInputHandler()}} color = '#c717fc' />   
             </View>
               <View  style = { styles.button}>
                <Button title = "Confirm" onPress = {() => {confirmInputHnadler()}}  color = 'blue' />
               </View>
            </View>
        </View>
         {confirmoutput}
        </View>
        </TouchableWithoutFeedback>
    );
  }
  
const styles = StyleSheet.create({
    screen:{
      flex:1 ,
      padding : 30 ,
      alignItems: 'center'
    } , 
    title :{
        fontSize: 20 , 
        marginVertical: 10 
    },
    inputContainer: {
      width: 300 ,
      maxWidth: '80%' , 
      alignItems: 'center',
      elevation: 5,
      padding: 20,
      borderRadius: 10
    },
    buttonContainer : {
     flexDirection: 'row',
     width: '100%',
     justifyContent: 'space-between',
     paddingHorizontal: 15 
    },
    button:
    {
        width: 90 

    },
    input :
    {
      
    },
    summaryContainer :
    {
      marginTop:20 , 
      alignItems: 'center'
    }



} );

  export default StartGameScreen;
