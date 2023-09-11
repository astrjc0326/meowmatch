import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';

import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './components/LogIn';
import MobileLogin from './components/MobileLogin';


export default function App () {
  const [page, setpage] = useState<string>('homelogin');
  useEffect(() => {}, [page])
  const currPage = page === 'homelogin' ?  <LogIn setpage={setpage}/> : page === 'mobilelogin' ? <MobileLogin setpage={setpage}/> : <LogIn  setpage={setpage}/>
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
