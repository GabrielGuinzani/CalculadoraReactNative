import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';
import Button from './Button';

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operator, setOperator] = React.useState("");
    const [result, setResult] = React.useState<Number | null>(null);

    const handleNumberPress = (butonValue: string)=> {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + butonValue);
        }
    };

    const handleOperatorPress = (buttonValue: string) => {
        setOperator(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperator("");
        setResult(null);
    };

    const calculate = () => {
        switch (operator) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);   
                break;
        };
        };

    return (
        <>
        <View style={Styles.row}>
            <Button title="1" onPress={() => handleNumberPress("1")} />
            <Button title="2" onPress={() => handleNumberPress("2")} />
            <Button title="3" onPress={() => handleNumberPress("3")} />
            <Button title="+" onPress={() => handleOperatorPress("+")} isBlue />
        </View>
        <View style={Styles.row}>
            <Button title="4" onPress={() => handleNumberPress("4")} />
            <Button title="5" onPress={() => handleNumberPress("5")} />
            <Button title="6" onPress={() => handleNumberPress("6")} />
            <Button title="-" onPress={() => handleOperatorPress("-")} isBlue />
        
        </View>
        <View style={Styles.row}>
            <Button title="7" onPress={() => handleNumberPress("7")} />
            <Button title="8" onPress={() => handleNumberPress("8")} />
            <Button title="9" onPress={() => handleNumberPress("9")} />
            <Button title="*" onPress={() => handleOperatorPress("*")} isBlue />
        </View>
        <View style={Styles.row}>
            <Button title="C" onPress={clear} isGray />
            <Button title="0" onPress={() => handleNumberPress("0")} />
            <Button title="=" onPress={calculate} isGray />
            <Button title="/" onPress={() => handleOperatorPress("/")} isBlue />
        </View>
        </>
    );
}
