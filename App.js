'use strict'

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'


export default class App extends Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
  
} 

const styles = StyleSheet.create({
    description: {
      fontSize: 18,
      textAlign: 'center',
      color: 'red',
      marginTop: 65,
    },
  })