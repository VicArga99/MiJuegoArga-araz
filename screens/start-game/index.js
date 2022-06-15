import React, {useState}  from 'react';
import { Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Card, Input } from "../../components/index";
import { styles } from "./styles";
import theme from "../../constants/theme";



const StartGame = () => {
  const[enteredValue, setEnteredValue] = useState("");
  const[confirmed, setConfirmed] = useState(false);
  const[selectedNumber, setSelectedNumber] = useState("");

  const onHandlerChangeText = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const onHandlerConfirm = () => {
    const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
  };

  const confirmedOuput = confirmed ? <Text >El número elegido :{ selectedNumber }</Text>: null
     
    
   
  
    return (
      <TouchableWithoutFeedback
      onPress={() =>{
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
          <Text style={styles.title}>Comenzar Juego</Text>
          <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Elija el número</Text>
          <Input 
          placeholder='11' 
          keyboardType='numeric'
          placeholderTextColor= {theme.colors.placeholder}
          maxLength={2}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          value={enteredValue}
          onChangeText={(text) => onHandlerChangeText(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title='Limpiar' 
            color={theme.colors.secondary}
             onPress={() => onHandlerReset()} 
            />
            <Button title='Confirmar' 
            color={theme.colors.secondary} 
            onPress={() => onHandlerConfirm()}
            />
          </View>
          </View>
          { confirmedOuput }
        </View>
        </TouchableWithoutFeedback>
        );
};

export default StartGame;