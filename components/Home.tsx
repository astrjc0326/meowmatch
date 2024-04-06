import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Profile from "./Profile";
import Profileicon from "../assets/Profileicon";
import Swapcaticon from "../assets/Swapcaticon";
import Chaticon from "../assets/Chaticon";
import Love from "../assets/Love";
import SwapCats from "./SwapCats";
import Chat from "./Chat";
import Like from "./Like";
import tw from "../lib/tailwind";

export default function Home() {
  const [page, setPage] = useState("profile");
  const [profileonclick, profilesetonclick] = useState(true);
  const [swaponclick, swapsetonclick] = useState(false);
  const [chatonclick, chatsetonclick] = useState(false);
  const [likeonclick, likesetonclick] = useState(false);
  useEffect(() => {}, [profileonclick]);
  let currpage = <Profile />;

  switch (page) {
    case "profile":
      currpage = <Profile />;
      break;
    case "swap":
      currpage = <SwapCats />;
      break;
    case "chat":
      currpage = <Chat />;
      break;
    case "like":
      currpage = <Like />;
  }
  return (
    <View style={tw`flex-1 items-center pt-18 bg-primary`}>
      {currpage}
      <View style={tw`flex-row justify-around absolute bottom-10`}>
        <TouchableOpacity
          style={tw`m-2`}
          onPress={() => {
            setPage("profile");
            profilesetonclick(true);
            swapsetonclick(false);
            chatsetonclick(false);
            likesetonclick(false);
          }}
        >
          <Profileicon color={profileonclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`m-2`}
          onPress={() => {
            setPage("swap");
            profilesetonclick(false);
            swapsetonclick(true);
            chatsetonclick(false);
            likesetonclick(false);
          }}
        >
          <Swapcaticon color={swaponclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`m-2`}
          onPress={() => {
            setPage("chat");
            profilesetonclick(false);
            swapsetonclick(false);
            chatsetonclick(true);
            likesetonclick(false);
          }}
        >
          <View style={tw`pt-2`}></View>
          <Chaticon color={chatonclick ? "#CBEEEE" : "#D9D9D9"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`m-2`}
          onPress={() => {
            setPage("like");
            profilesetonclick(false);
            swapsetonclick(false);
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
