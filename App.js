/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { View } from "react-native";
import Header from "./src/components/Headers";
import AlbumList from "./src/components/AlbumList";

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={"Albums"} />
    <AlbumList />
  </View>
);

export default App;
