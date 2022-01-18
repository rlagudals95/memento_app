import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import Router from './Router'
import * as Font from 'expo-font'
import {useEffect} from 'react'

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App() {

  const getFonts = () => {
    return Font.loadAsync({
      'noto-sans': require('./config/font/NotoSansKR-Regular.otf'),
    })
  }

  useEffect(() => {
    getFonts();
  }, [])
  return (
    <Provider store={store}>
        <View style={styles.container}>   
          <Router/>
          <StatusBar style="auto" />     
        </View>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    fontFamily:'noto-sans',
    width: "100%",
    height: "100%"
  },
});
