import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.Containertop}>
      <View style ={styles.contTop1}>
        <Text style={styles.text}>importe:</Text>
        <TextInput value= {"D"}   placeholder='1250' style={styles.textimput}></TextInput>
      </View>

      <View style ={styles.contTop2}>
        <Text style={styles.text}># personas:</Text>
        <TextInput value= {"D"}   placeholder='a'style={styles.textimput}></TextInput>
        <Button onPress={"oncalcularbuttontapped"} title='-'/>
        <Button onPress={"oncalcularbuttontapped"} title='+'/>
      </View>

      <View style ={styles.contTop3}>
      <Button onPress={"oncalcularbuttontapped"} title='8%'/>
      <Button onPress={"oncalcularbuttontapped"} title='10%'/>
      <Button onPress={"oncalcularbuttontapped"} title='12.5%'/>
      <Button onPress={"oncalcularbuttontapped"} title='15%'/>
      </View>
      
      <View style ={styles.contTop4}>
        <Text style={styles.text}>% propina:</Text>
        <TextInput value= {"D"}   placeholder='a' style={styles.textimput}></TextInput>
        <Button onPress={"oncalcularbuttontapped"} title='-'/>
        <Button onPress={"oncalcularbuttontapped"} title='+'/>
      </View>
      </View>



      {/* <View style={styles.commandsContainer}>
        {/* <TextButton title='calcular' onPress={oncalcularbuttontapped}/>
        <TextButton title='limpiar' onPress={onlimpiarbuttontapped}/>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resulText}>el IMC de la persona es:</Text>
        <Text style={styles.result}>{"imc"}</Text>
        <Text style={styles.resulText}>el estado nutricional de la persona es:</Text>
        <Text style={styles.result}>{"estadonutricional"}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    borderColor:'lightgray',
    flexDirection: 'column',
    //gap:50,
    backgroundColor: '#fff',
    alignItems: 'fill',
    justifyContent: 'top',
  },
  Containertop: {
      flex: 0,
      borderColor:'lightgray',
      borderWidth: 1,
      padding: 1,
      backgroundColor: "lightgray",
      borderRadius:10,
      
  },
  contTop1: {
    flex: 0,
    flexDirection: "row",
    borderColor:'lightgray',
    borderWidth: 1,
    gap: 10,
    alignItems: "center"
    },
  contTop2: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingTop:10,
    },
  contTop3: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingTop:10,
    },
  contTop4: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingTop:10,
    },
  text: {
    fontSize: 15,
  },
  textimput: {
    fontSize: 15,
    flex:1,
  },
  resultsContainer: {      
    flex: 0,
    borderColor:'lightgray',
    borderWidth: 2,
    padding:8,
    borderRadius:10,
  },
  resulText:{
    fontSize:18,

  },
  result:{
    fontSize:24,
    fontWeight:'bold',
    alignItems:'center',
    alignSelf: 'center',
    marginVertical:16,
  },
  // button:{
  //   borderColor: 'green',
  //   borderWidth:2,
  //   borderRadius:5,
  //   padding: 8,
  //   backgroundColor: 'red',
  // },
  // textbutton:{
  //   color: 'white',
  //   fontSize: 18,
  // }
 
});
