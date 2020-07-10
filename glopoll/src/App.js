import React from 'react';
import { chunk } from 'lodash';
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
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 2,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 3,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 4,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 5,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 5,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 5,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
				{
					id: 5,
					title: "Flask or Django?",
					text: "Which do you prefer?",
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: 'Flask',
					choiceTwo: 'Django'
				},
			]
		}
	}

	voteYes = (id) => {
		this.setState(this.state.polls.map((poll) => {
			if (poll.id === id){
				poll.yesVotes += 1
				poll.voted += 1
			}

			this.findPercent(id);

			return poll;
		}))
	}

	voteNo = (id) => {
		this.setState(this.state.polls.map((poll) => {
			if (poll.id === id){
				poll.noVotes += 1
				poll.voted += 1
			}

			this.findPercent(id);

			return poll;
		}))
	}

	findPercent = (id) => {
		this.setState(this.state.polls.map((poll) => {
			if (poll.id === id){
				poll.yesPercent = (poll.yesVotes/poll.voted)*100;
				poll.noPercent = (poll.noVotes/poll.voted)*100;
			}

			return poll;
		}))
	}

	render() {
		return (
			<div>
		    	<NavBar />
		    	<Container fluid="md">
		    			<Row>
		    				<Poll polls={this.state.polls} voteYes={this.voteYes} voteNo={this.voteNo} />
	    				</Row>
	    		</Container>
			</div>
		);
	}
	
}

export default App;
