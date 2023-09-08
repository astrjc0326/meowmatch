import { StyleSheet, Text, View, Button } from 'react-native';
import LOGOSVG from "../assets/Logo";
import RightLogo from "../assets/RightLogo";
import LeftLogo from "../assets/LeftLogo";

export default function LogIn() {
  return (
    <View style={styles.container}>
      <RightLogo style={styles.rightlogo}/>
      <LeftLogo style={styles.leftlogo}/>
      <LOGOSVG style={styles.logo}/>
      <Text style={styles.title}>MeowMatch</Text>
      <Button title="Continue with Facebook"></Button>
      <br></br>
      <Button title="Use another Option"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#b0c5c5",
    fontSize: 60,
    fontWeight: "500"
  },
  logo: {
    position: "absolute",
    top: "10%"
  },
  rightlogo: {
    position: "absolute",
    left: 0,
    top: "20%"
  },
  leftlogo: {
    position: "absolute",
    right: 0,
    top: "20%"
  }
});
