import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LOGOSVG from "../assets/Logo";
import RightLogo from "../assets/RightLogo";
import LeftLogo from "../assets/LeftLogo";

export default function LogIn({ setPage }) {
  return (
    <View style={styles.container}>
      <RightLogo style={styles.rightlogo}/>
      <LeftLogo style={styles.leftlogo}/>
      <LOGOSVG style={styles.logo}/>
      <Text style={styles.title}>MeowMatch</Text>
      <View style={styles.login}>
      <TouchableOpacity
      style={styles.fbbtn} onPress={() => console.log('fb btn on click')}>
        <Text style={styles.fbbtntext}>Continue with Facebook</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.otherbtn} onPress={() =>setPage('mobileLogin')}>
        <Text style={styles.otheroption}>Use Mobile number</Text>
      </TouchableOpacity>
      <Text style={styles.announce}>Don't worry! We never post to Facebook.</Text>
      <View style={styles.row}>
      <TouchableOpacity style={styles.row}>
      <Text style={styles.term}>Terms of Service</Text>
      </TouchableOpacity>
      <Text>  </Text>
      <TouchableOpacity>
      <Text style={styles.term}>Privacy Policy</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#b0c5c5",
    fontSize: 60,
    fontWeight: "700",
    position: "absolute",
    top: "30%"
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
  },
  login: {
    alignItems: "center",
    position: "absolute",
    bottom: "20%",
  },
  otherbtn:{
    // position: "absolute",
    // bottom: "25%"
  },
  row: {
    flexDirection: 'row'
  }
  ,
  otheroption: {
    fontWeight: "600",
    color: "#b0c5c5",
  },
  fbbtn: {
    // position: "absolute",
    // bottom: "30%",
    backgroundColor:'#e8e5e5',
    borderRadius: 30,
    marginTop: 30,
    marginHorizontal: 20,

  },
  fbbtntext: {
    fontWeight: "600",
    borderRadius: 30,
    marginVertical: 15,
    marginHorizontal: 85,
  },
  term: {
    color: "#b0c5c5",
    fontWeight: "300",
    textDecorationLine: "underline",
  },
  announce: {
    color: "#b0c5c5",
    fontWeight: "500",
    marginTop: 40
  }
});
