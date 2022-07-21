import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';



const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue){
     return console.log("Please enter value");
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
    setInputValue(0);
  };
  return (

      <ScrollView backgroundColor="#1b362c" keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView style={styles.container}> 
         
          <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Value"
            placeholderTextColor="#c1c1c1"
            value={inputValue}
            onChangeText={(inputValue) => setInputValue(inputValue) }
            >
            </TextInput>
          </View>
    <View style={styles.covertButtonContainer}>
{Object.keys(currencyPerRupee).map((currency) => (
  <TouchableOpacity key={currency}
  style={styles.coverterButton}
  onPress={() => buttonPressed(currency)}
  >
   <Text style={styles.temp}>
  {currency}
   </Text>
  </TouchableOpacity>
))}
    </View>
        </SafeAreaView>
      </ScrollView>
   
  );
}
export default App;
const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:"#1b362c",
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center",
  },
  resultValue:{
    fontSize:30,
    color:"#ffffff",
    fontWeight:"500",
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#bbe2fa",
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#fff"
  },
  covertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10,

  },
  temp:{
    color:"#fff",
    fontSize:15,
    fontWeight:"500",
  },
  coverterButton:{
    height:100,
    width:"33.3%",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:2,
    borderColor:"#bbe1fa",
    marginTop:20,
    backgroundColor:"#0f4c75"
  }
});


