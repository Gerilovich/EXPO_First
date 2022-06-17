import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
				<Image source={require("./assets/2.png")}/>
			</TouchableOpacity>
			<Text>We are just getting started</Text>
			</View>
		);
	}
	}

	const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#859a9b',
		borderRadius: 20,
		padding: 10,
		marginBottom: 20,
		shadowColor: '#303838',
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 10,
		shadowOpacity: 0.35,
	},
});