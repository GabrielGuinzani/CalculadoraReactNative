import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


function Calculadora() {
  const [theme, setTheme] = useState("light");
  
  const insets = useSafeAreaInsets();

  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === 'light' ? [styles.container, {    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right}] : [styles.container, {backgroundColor: '#000',    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right}]}>
      <Switch 
        value={theme === "light"} 
        onValueChange={(value) => setTheme(theme === 'light'? "dark":"light")} 
      />
      <StatusBar style="auto" />
      <MyKeyboard />
    </View>
    </ThemeContext.Provider>
  )
}

export default function App() {


  return (
    <SafeAreaProvider>
   
     <Calculadora/>
   
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
