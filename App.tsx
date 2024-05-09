import React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './components/LogIn';
import MobileLogin from './components/MobileLogin';
import Introduce from './components/Introduce';
import Settings from './components/Settings';
import AddPhoto from './components/AddPhoto';
import ProfileCamera from './components/ProfileCamera';
import SelfIntroduction from './components/SelfIntroduction';
import Home from './components/Home';

export default function App () {
  const [page, setpage] = useState<string>('home');
  useEffect(() => {}, [page])
  // let currPage = <LogIn setpage = {setpage} />
  let currPage = <Home />
  switch(page) {
    case ("homelogin"):
      currPage = <LogIn setpage={setpage}/>
      break;
    case ("mobilelogin"):
      currPage = <MobileLogin setpage={setpage}/>
      break;
    case ("introduce"):
      currPage = <Introduce setpage={setpage}/>
      break;
    case ("settings"):
      currPage = <Settings />
      break;
    case("addphoto"):
      currPage = <AddPhoto setpage={setpage}/>
      break;
    case("profilecamer"):
      currPage = <ProfileCamera />
      break;
    case("selfintroduction"):
      currPage = <SelfIntroduction setpage={setpage}/>
      break;
    case("home"):
      currPage= <Home />
      break;
  }
  useEffect(() => {

  }, [page, setpage])
    return (
    <>
      {currPage}
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
