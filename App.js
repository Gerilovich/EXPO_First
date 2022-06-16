import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
	const [todos, setTodos] = useState([])
	
	const addTodo = (title) => {
		setTodos(prev => [...prev,
			{
			id: Date.now().toString(),
			title
			}
		])
	}

	return (
		<View>
			<Navbar title='First App!'/>
			<View style={styles.container}>
				<View>
			<Text style={styles.text}>
				* Это моё первое приложение созданное с применением EXPO. Для создания этого приложения использовал подсказки из общедоступных источников.
			</Text>
			</View>
				<AddTodo onSubmit={addTodo} />
				<View>
					{todos.map(todo => (
						<Todo todo={todo} key={todo.id} />
					))}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 10
	},
	text: {
		fontSize: 12,
		paddingBottom: 15,
		textAlign: 'center',
	}
})
