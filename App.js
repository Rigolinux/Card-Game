
import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//components
import Card from './src/components/Card';

//icons
import { Iconscards } from './assets/cards/cards';

//import function
import { shuffle } from './src/utils/Shuffle';

export default function App() {

  //shuffle the cards and save a new array in duplicate
  const [board, setBoard] = useState(()=>shuffle([...Iconscards, ...Iconscards]));

  const [selectedCards, setSelectedCards] = useState([]);

  const [matchedCards, setMatchedCards] = useState([]);

  const [score, setScore] = useState(0);

  useEffect(
    () => {
      if(selectedCards.length < 2) return;
      if (board[selectedCards[0]] === board[selectedCards[1]]) {
        setMatchedCards([...matchedCards, ...selectedCards]);
        setSelectedCards([]);
        setScore(score + 1);
      } else{
        const timer = setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
        return () => clearTimeout(timer);
      }

    }, [selectedCards]
  )
  const handleCardPress = (index) => {
    if(selectedCards.length === 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);

  };

  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCards([]);
  };

  const didPlayerWin = () => matchedCards.length === board.length;
   
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{didPlayerWin() ? "Congratulation":"Card Game"}</Text>
      <Text style={styles.title}>{score}</Text>
      <View style={styles.board}>{board.map((card,index)=>{
        const isTurned = selectedCards.includes(index) || matchedCards.includes(index);
        return(
          <Card 
          key={index}
          isTurned={isTurned}
          onPress={()=>handleCardPress(index)}
          >{card}</Card>
        );
      })}
      </View>
      {didPlayerWin() && <Button title="Play Again" onPress={resetgame}/>}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 32,
    color: '#fff',
    fontWeight: "900",
  },
  board:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});


