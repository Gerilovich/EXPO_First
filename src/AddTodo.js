import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert, Image, TouchableOpacity} from 'react-native'

export const AddTodo = ({onSubmit}) => {

	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		} else{
			Alert.alert('Введите текст в поле ввода')
		}
	}

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder="Введите текст!"
			/>
	

			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={pressHandler}>
					<Image source={require('../assets/airplane1.png')} style={styles.img}/>
					
				</TouchableOpacity>
				
			</View>

		</View>
	)

}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15
	},
	input: {
		width: '70%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
		width:60,
		height:60,
		backgroundColor:'#fff',
		borderRadius:50,
		backgroundColor: '#DC143C',
	},
	img: {
		height: 30,
		width: 30,
		resizeMode : 'stretch',
	}
})