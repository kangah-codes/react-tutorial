import React from 'react';
import './App.css';
import NavBar from './UIComponents/Navbar.js';
import Poll from './UIComponents/Poll.js';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			polls: [
				{
					id: 1,
					title: "Trump or Obama?",
					text: "Will you rather vote for Dona",
					yesVotes: 0,
					noVotes: 0
				},
				{
					id: 1,
					title: "Trump or Obama?",
					text: "Will you rather vote for Dona",
					yesVotes: 0,
					noVotes: 0
				},
				{
					id: 1,
					title: "Trump or Obama?",
					text: "Will you rather vote for Dona",
					yesVotes: 0,
					noVotes: 0
				},
				{
					id: 1,
					title: "Trump or Obama?",
					text: "Will you rather vote for Dona",
					yesVotes: 0,
					noVotes: 0
				},
			]
		}
	}

	render() {
		return (
			<div>
		    	<NavBar />
		    	<Container>
		    		<div style={{paddingTop: '10%'}} align="center">
		    			<Row>
		    				<CardGroup style={{width:'100%'}}>
		    					<Poll polls={this.state.polls} />
		    				</CardGroup>
	    				</Row>
	    			</div>
	    		</Container>
	    		<footer className="footer">
	    			Developed by Joshua Akangah
	    		</footer>
			</div>
		);
	}
	
}

export default App;
