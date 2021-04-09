//import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, ScrollView,Text, View , Button , Image,TextInput , ImageBackground} from 'react-native';
import Header from  './components/Header';
import  StartGameScreen   from './screens/StartGameScreen';
import  GameScreen   from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
const App = () => {
const [useNumber , setUseNumber]= useState();
const [guessRounds,setGuessRounds] = useState(0);
const startGameHandler = (selectedNumber)=>{
  setUseNumber(selectedNumber);
  setGuessRounds(0);
}
const gameOverHandler = numOfRounds => {
  setGuessRounds(numOfRounds);
};

let content = <StartGameScreen onStartGame = {startGameHandler}   />
   if(useNumber && guessRounds<=0)
   {
     content = <GameScreen userChoice=  {useNumber}  onGameOver = {gameOverHandler}/>
   }
   else if (guessRounds>0)
   {
     content = <GameOverScreen  roundsNumber ={guessRounds}  useNumber = {useNumber}/>;
   }
  
  return (
    
    <View style = { styles.screen}>
    <Header title= "Guess a number " />
      {content}
      </View>
  );


}

const styles = StyleSheet.create({
  screen:{
    flex:1
  } ,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  } 

});
export default App;