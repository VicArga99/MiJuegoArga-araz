import React, {useState} from 'react';
import {  View, Text, Button  } from 'react-native';
import { NumberContainer, Card } from '../../components/index';
import { styles } from './styles';
import theme from "../../constants/theme";

const generateRandomNumber =(min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
      }
};

const GameScreen = ({ useOptions }) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 99, useOptions)
        );

    return (
        <View style={styles.container}>
            <Text>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Menor" 
                onPress={() => null}
                color={theme.colors.secondary}>
                </Button>
                <Button title="Mayor" 
                onPress={() => null}
                color={theme.colors.secondary}>
                    </Button>
            </Card>
        </View>
    );
};

export default GameScreen;