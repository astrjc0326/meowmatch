import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function MobileLogin() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitbtn}>
        <Text style={styles.exittext}>X</Text>
      </TouchableOpacity>

      <Text style={styles.title}>What's your number?</Text>
      <Text style={styles.description}>Whether you're creating an account or signing back in, let's start with your number</Text>
      <View style={styles.phoneinput}>
        <Text style={styles.countrycode}>+1</Text>
        <View style={styles.phoneviewcontainer}>
          <TextInput keyboardType="number-pad" placeholder="Phone number" placeholderTextColor="#DEDADA" maxLength={10}
           style={styles.numberInput}></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    postion: "absolute",
    top: "-10%",
    backgroundColor: "#e9f5f5",
    borderRadius: 30,
    // marginTop: 30,
    // marginHorizontal: 85,

  },
  btnText: {
    fontWeight: "600",
    borderRadius: 30,
    marginVertical: 15,
    marginHorizontal: 150,
  },
  phoneviewcontainer: {
    // position: "absolute",
    // top: "30%",
    width: '80%',
    height: 40,
    fontSize : 20,
    fontWeight : 'bold',
    borderColor : 'grey',
    borderWidth : 4,
    borderRadius : 7,
  },
  numberInput: {
    position: "relative",
    width: "100%",
    height: "100%",
    fontSize: 20,
    marginLeft: 10
  },
  title: {
    position: "absolute",
    top: "8%",
    color: "#b0c5c5",
    fontSize: 25,
    fontWeight: "500"
  },
  countrycode: {
    color: "#6a6767",
    fontSize: 20,
    marginTop : 9,
    marginRight: 9
  },
  phoneinput: {
    flexDirection: 'row',
    position: "absolute",
    top: "25%",

  },
  description: {
    position: "absolute",
    top: "15%",
    marginHorizontal: 30,
    color: "#6a6767"
  },
  exitbtn: {
    position: "absolute",
    left: "2%",
    top: "3.5%",
    margin: 5
  },
  exittext: {
    color: "#6a6767"
  }
})