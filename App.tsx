import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './components/LogIn';
import MobileLogin from './components/MobileLogin';

export default function App() {
  const [page, setPage] = useState('homelogin');
  const currPage = page === 'homelogin' ?  <LogIn setPage={setPage} /> : page === "mobileLogin" ? <MobileLogin setPage={setPage}/> : ''
  useEffect(() => {}, [page])
  return (
    <>
      { currPage }
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
