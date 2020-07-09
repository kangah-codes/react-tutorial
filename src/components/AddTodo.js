import React from 'react';

export default class AddTodo extends React.Component{
	render() {
		return (
			<form style={{ display: 'flex' }}>
				<input 
					type="text" 
					name="title" 
					placeholder="Add Todo"
					style={{flex: '10', padding: '5px'}}
				/>
				<input 
					type="submit" 
					value="submit" 
					className="btn" 
					style={{flex:1}}
				/>
			</form>
		)
	}
}