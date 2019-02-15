/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/Header";

export default class App extends Component {
  render() {
    return <Header headerText={"ERP"} />;
  }
}

AppRegistry.registerComponent("erpand", () => App);
