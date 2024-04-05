import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Profile from "./Profile";
import Profileicon from "../assets/Profileicon";
import styles from "../assets/styles";
import Swipcaticon from "../assets/Swipcaticon";
import Chaticon from "../assets/Chaticon";
import Love from "../assets/Love";
import SwipCats from "./SwipCats";
import Chat from "./Chat";
import Like from "./Like";

export default function Home() {
  const [page, setPage] = useState("profile");
  const [profileonclick, profilesetonclick] = useState(true);
  const [swiponclick, swipsetonclick] = useState(false);
  const [chatonclick, chatsetonclick] = useState(false);
  const [likeonclick, likesetonclick] = useState(false);
  useEffect(() => {}, [profileonclick]);
  let currpage = <Profile />;

  switch (page) {
    case "profile":
      currpage = <Profile />;
      break;
    case "swip":
      currpage = <SwipCats />;
      break;
    case "chat":
      currpage = <Chat />;
      break;
    case "like":
      currpage = <Like />;
  }
  return (
    <View style={styles.container}>
      {currpage}
      <View style={{ ...stylesheet.row, ...stylesheet.footer }}>
        <TouchableOpacity
          style={stylesheet.svg}
          onPress={() => {
            setPage("profile");
            profilesetonclick(true);
            swipsetonclick(false);
            chatsetonclick(false);
            likesetonclick(false);
          }}
        >
          <Profileicon color={profileonclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesheet.svg}
          onPress={() => {
            setPage("swip");
            profilesetonclick(false);
            swipsetonclick(true);
            chatsetonclick(false);
            likesetonclick(false);
          }}
        >
          <Swipcaticon color={swiponclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesheet.svg}
          onPress={() => {
            setPage("chat");
            profilesetonclick(false);
            swipsetonclick(false);
            chatsetonclick(true);
            likesetonclick(false);
          }}
        >
          <View style={stylesheet.paddingtop}></View>
          <Chaticon color={chatonclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesheet.svg}
          onPress={() => {
            setPage("like");
            profilesetonclick(false);
            swipsetonclick(false);
            chatsetonclick(false);
            likesetonclick(true);
          }}
        >
          <Love color={likeonclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  photo: {
    marginTop: 50,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-around",
  },
  footer: {
    position: "absolute",
    bottom: "2%",
  },
  name: {
    fontSize: 30,
    fontWeight: "500",
  },
  age: {
    fontSize: 30,
    marginLeft: 5,
  },
  svg: {
    margin: 10,
  },
  paddingtop: {
    marginTop: 5,
  },
});
