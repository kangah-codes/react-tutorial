import React from 'react';
import './App.css';
import NavBar from './UIComponents/Navbar.js';
import Poll from './UIComponents/Poll.js';
import { Container, Row, Col } from 'react-bootstrap';

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
		    				<Poll polls={this.state.polls} />
	    				</Row>
	    			</div>
	    		</Container>
			</div>
		);
	}
	
}

export default App;
