import React from 'react';
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
					yesVotes: 5,
					noVotes: 3,
					voted: 8,
					yesPercent: 62.5,
					noPercent: 37.5,
					choiceOne: 'Flask',
					choiceTwo: 'Django',
					willExpireOn: '1 48',
					isExpired: true,
				},
			],
		}

		localStorage.setItem('polls', JSON.stringify(this.state.polls))
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
		}))
	}

	killPoll = (id) => {
		this.setState(this.state.polls.map((poll) => {
			if (poll.id === id){
				poll.isExpired = true;
			}
		}))
	}


	addPoll = (e) => {
		e.preventDefault();
		this.setState({
			polls: [
				...this.state.polls, 
				{
					id: 10,
					title: e.target.title.value,
					text: e.target.description.value,
					yesVotes: 0,
					noVotes: 0,
					voted: 0,
					yesPercent: 0,
					noPercent: 0,
					choiceOne: e.target.choiceOne.value,
					choiceTwo: e.target.choiceTwo.value,
					willExpireOn: '7 30',
					isExpired: false,
				}
			]
		})

		localStorage.setItem('polls', JSON.stringify(this.state.polls))
	}

	render() {
		let polls = JSON.parse(localStorage.getItem('polls'));
		console.log(polls)
		return (
			<div>
		    	<NavBar polls={polls} voteYes={this.voteYes} voteNo={this.voteNo} killPoll={this.killPoll} addPoll={this.addPoll} />
			</div>
		);
	}
	
}

export default App;
