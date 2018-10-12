import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Calculator from '../container/Calculator';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
let _nav;
const headerLeft = (navigation) => {
	return(
		<TouchableOpacity style={{ width: 70, padding: 17, height:53, top: -2, ...ifIphoneX({ marginTop: -45 }, { marginTop: 0 }) }} onPress={() => goBack(navigation)} >
				<SimpleLineIcons name="arrow-left" size={20} color="#fff" />
		</TouchableOpacity>
	)
}
const headerRight = (navigation) => {
	return(
		<View style={{ width: 60, height:53, top: -2, ...ifIphoneX({ marginTop: -45 }, { marginTop: 0 }) }} />
	)
}
const goBack=(navigation)=>{
	navigation.goBack();
}

const AppNavigator = createStackNavigator({
    Calculator: { screen: Calculator },
},
{
    navigationOptions : ({ navigation }) => ({
        headerStyle: {
			backgroundColor: '#3c3d3c', borderBottomWidth: 0, borderBottomColor: '#ddd',
			...ifIphoneX({
				height: 10
			}, {
				height: (Platform.OS === 'ios') ? 35 : StatusBar.currentHeight + 35,
				paddingBottom: (Platform.OS === 'ios') ? 15 : StatusBar.currentHeight - 30
			}),
        },
        headerTitleStyle: {
			flex:1,
			textAlign: 'center',
			fontSize: 18,
			top: -2,
			...ifIphoneX({ marginTop: -40 }, { marginTop: 0 })
		},
        headerTintColor: 'white',
        headerLeftContainerStyle: {
			backgroundColor: '#3c3d3c'
        },
        headerLeft: null,
		headerRight: null
	}),
	cardStyle: {
		shadowColor: 'transparent',
	}
});

export default AppNavigator;
