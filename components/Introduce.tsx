import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function Introduce ({navigation}: any) {
  const [isMonPress, setisMonPress] = useState<Boolean>(false);
  const [isFonPress, setisFonPress] = useState<Boolean>(false);
  let onMpressStyle = isMonPress ? styles.optionbtnOnPress : styles.optionbtn;
  let onFpressSytle = isFonPress ? styles.optionbtnOnPress : styles.optionbtn;
  useEffect(() => {}, [isMonPress])
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Introduce yourself!</Text>
      <Text style={styles.description}>Fill out the rest of your details so meows know a little more about you.</Text>
      <Text style={styles.identify}>I identify as a ....</Text>
      <TouchableOpacity style={onFpressSytle} onPress={() => { setisFonPress(true);
        setisMonPress(false)}}
        >
        <Text style={styles.optiontxt}>Femeow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={onMpressStyle} onPress={() => { setisMonPress(true);
      setisFonPress(false)}}
      >
        <Text style={styles.optiontxt}>Meow</Text>
      </TouchableOpacity>
    <Text style={styles.identify}>Birthday</Text>
      <TextInput placeholder='MM/DD/YYYY' keyboardType='numeric' placeholderTextColor='#DEDADA' maxLength={8} style={styles.input}></TextInput>
    <Text style={styles.identify}>Name</Text>
    <TextInput placeholder='Add your first name' placeholderTextColor="#DEDADA" maxLength={20} style={styles.input}>
    </TextInput>


    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AddPhoto")}>
      <Text style={styles.btntxt}>Continue</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "flex-start",
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 70
  },
  title: {
    textAlign: "center",
    alignContent: "center",
    width: "100%",
    color: "#b0c5c5",
    fontSize: 25,
    fontWeight: "600",
    marginVertical: "5%",
    paddingTop: "2%"
  },
  description: {
    // position: "absolute",
    // top: "18%",
    color: "#6a6767",
    marginVertical: "2%",
    fontSize: 17,
    textAlign: "center"
  },
  identify: {
    color: "#6a6767",
    marginVertical: "2%",
    fontSize: 15
  },
  optiontxt: {
    color: "#6a6767",
    fontSize: 20,
    fontWeight: "400"
  },
  optionbtn: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderColor: "#6a6767",
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 3
  },
  optionbtnOnPress: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#e9f5f5",
    borderColor: "#e9f5f5",
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 3,
  }
  ,
  input: {
    height: 50,
    fontSize: 20,
    marginVertical: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderColor: "#6a6767",
    borderWidth: 0.5,
    borderRadius: 10
  },
  btn: {
    width: "100%",
    alignContent: "center",
    backgroundColor: "#e9f5f5",
    borderRadius: 30,
    marginTop: "3%"
  },
  btntxt: {
    width: "100%",
    fontWeight: "600",
    textAlign: "center",
    borderRadius: 30,
    marginVertical: 15,
  }
})