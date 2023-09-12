import { StyleSheet } from 'react-native';

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
  },
   description: {
    // position: "absolute",
    // top: "18%",
    color: "#6a6767",
    marginVertical: "2%",
    fontSize: 17,
    textAlign: "center"
  },


});

export default styles;