import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';

import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './components/LogIn';
import MobileLogin from './components/MobileLogin';
import Introduce from './components/Introduce';


export default function App () {
  const [page, setpage] = useState<string>('homelogin');
  useEffect(() => {}, [page])
  let currPage = <LogIn setpage={setpage}/>
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
