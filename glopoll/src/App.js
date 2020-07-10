import React from 'react';
import { chunk } from 'lodash';
import './App.css';
import NavBar from './UIComponents/Navbar.js';
import Poll from './UIComponents/Poll.js';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './Logic/UserProfile';
// global variable
var newUser;

class App extends React.Component {
	constructor() {
		super();

		newUser = new User('1');
		localStorage.setItem(newUser.id.toString(), newUser.getPoll())

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
					id: 6,
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
					id: 7,
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
					id: 8,
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
			],
		}
	}

	voteYes = (e, id) => {
		var btnArray = document.getElementsByClassName(`${id}poll`);
		for (let i=0; i<btnArray.length; i++){
			btnArray[i].disabled = true;
		}
		this.setState(this.state.polls.map((poll) => {
			if (poll.id === id){
				poll.yesVotes += 1
				poll.voted += 1
				newUser.addPoll(poll.id);
				this.findPercent(id);
			}
		}))
	}

	voteNo = (e, id) => {
		var btnArray = document.getElementsByClassName(`${id}poll`);
		for (let i=0; i<btnArray.length; i++){
			btnArray[i].disabled = true;
		}
		this.setState(this.state.polls.map((poll) => {
			if (poll.id === id){
				poll.noVotes += 1
				poll.voted += 1
				newUser.addPoll(poll.id);
				this.findPercent(id);
			}
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
