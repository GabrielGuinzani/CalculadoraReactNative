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

        const firstNumberDisplay = () => {
            if (result !== null) {
                return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>; 
            }
            if (firstNumber && firstNumber.length < 6) {
              return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
            }
            if (firstNumber === "") {
              return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
            }
            if (firstNumber.length > 5 && firstNumber.length < 8) {
              return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                  {firstNumber}
                </Text>
              );
            }
            if (firstNumber.length > 7) {
              return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                  {firstNumber}
                </Text>
              );
            }
          };
        
    return (
        <View style ={Styles.viewBottom}>
            <View
             style={{
                height: 120,
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                width: "90%"

             }}>
                    <Text style={Styles.screenSecondNumber}>
                        {secondNumber}
                        <Text style={{color: "purple",fontSize:50, fontWeight:'500'}}> 
                        {operator} 
                        </Text>
                    </Text>
                    {firstNumberDisplay()}
             </View>
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
        </View>
    );
}
