/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import ButtonList from '../container/ButtonList';
import {connect} from 'react-redux';
import {clearDisplay} from '../store/apiHelper';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');

const mapStateToProps = state => {
    return {
        display: state.display,
    }
  };

class Calculator extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>CALCULATOR</Text>
          </View>
        )
      });
  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity style={{width, backgroundColor: '#2F4F4F', justifyContent: 'flex-end', alignItems: 'center', padding: 5, borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',}} onPress={() => store.dispatch(clearDisplay())}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Clear All</Text>
            </TouchableOpacity>
        
        <View style={{height: 2*(height/6), width, backgroundColor: '#A9A9A9', justifyContent: 'flex-end', alignItems: 'flex-end', padding: 5}}><Text>{this.props.display.displayValue}</Text></View>
        <View style={{height: height/2, width, backgroundColor: '#3E606F'}}>
            <ButtonList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: { 
    flex: 1, 
    marginTop: 0, 
    ...ifIphoneX({ marginTop: -40 }, { marginTop: 0 }) 
  },
  headerTitle: { 
    textAlign: 'center',
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default connect(mapStateToProps)(Calculator);