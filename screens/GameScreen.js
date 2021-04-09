import React , {useState , useRef , useEffect} from 'react'; //HOOKS TO STATE CHANGE 
import { StyleSheet, Alert, ScrollView,Text, View , Button , Image,TextInput , ImageBackground} from 'react-native';
import NumberConatiner from '../components/NumberContainer';
import StartGameScreen from './StartGameScreen';


const GameScreen = props => {
const [rounds,setRounds] = useState(0);
  
const currLow = useRef(1);
const currHigh = useRef(100);

const { userChoice , onGameOver} = props ; 

  const genrateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min ;
    if(rndNum==exclude)
    {
        return genrateRandomBetween(min,max,exclude);
    }
    else
    {
        return rndNum;
    }
  }; 
  const [currentGuess , setCurrentGuess] = useState(
    genrateRandomBetween(1,100,props.userChoice)
   )
  useEffect(()=> {
    if(currentGuess === props.userChoice)
    {
       props.onGameOver(rounds);
    }
  },[currentGuess,userChoice,onGameOver]);


 const nextGuessHandler = direction =>{
    if( (direction==='lower' && currentGuess < props.userChoice)  || (direction==='higher' && currentGuess > props.userChoice)){
       Alert.alert('Dont lie ' , 'It is wrong ' , [{text: 'Sorry' , style: 'cancel'}]);
       return;
    }
    if(direction === 'lower')
    { currHigh.current = currentGuess ;
      
    }
    else
    {
      currLow.current = currentGuess ;
    }
    const nextNumber =   genrateRandomBetween(currLow.current,currHigh.current,currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
 };
    return (
    <View style ={styles.screen}> 
       <Text> Opponents Guess</Text>
       <NumberConatiner> {currentGuess} </NumberConatiner>
       <View style ={styles.buttonContainer}>
           <Button title = 'LOWER' onPress={nextGuessHandler.bind(this,'lower')} />
           <Button title = 'HIGHER'  onPress={nextGuessHandler.bind(this,'higher')} />
       </View>
    </View>
    );
  }
  
const styles = StyleSheet.create({
    screen:{
      flex:1 ,
      padding : 10 ,
      alignItems: 'center'
    },
    buttonContainer : {
      flexDirection: 'row',
      width: 300,
      maxWidth:'80%',
      justifyContent: 'space-around',
      marginTop:20
     }


} );

  export default GameScreen;
