import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Navigation />
      </View> */}
      <div>dd</div>
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
