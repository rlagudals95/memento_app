import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import Navigation from './src/components/Navigation'

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation/>
        <Text>Open up App.js to start working on your app!</Text>
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
  },
});
