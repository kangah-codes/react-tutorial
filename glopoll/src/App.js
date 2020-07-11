import React from 'react';
import './App.css';
import NavBar from './UIComponents/Navbar.js';
import Poll from './UIComponents/Poll.js';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './Logic/UserProfile';
import {v4 as uuid} from 'uuid';

// global variable
var newUser;

class App extends React.Component {
	constructor() {
		super();

		newUser = new User('1');

		this.state = {
			polls: JSON.parse(localStorage.getItem('polls'))
		}

		localStorage.setItem('polls', JSON.stringify(this.state.polls))
	}

	voteYes = (e, id) => {
		if (!newUser.getPoll().includes(id)){
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
			newUser.addPoll(id);
			localStorage.setItem('polls', JSON.stringify(this.state.polls))
		}
		
	}

	voteNo = (e, id) => {
		if (!newUser.getPoll().includes(id)){
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
			newUser.addPoll(id);
			localStorage.setItem('polls', JSON.stringify(this.state.polls))
		}
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
		console.log(JSON.parse(localStorage.getItem('polls')))
		this.setState({
			polls: [
				...JSON.parse(localStorage.getItem('polls')), 
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
		});



		localStorage.setItem('polls', JSON.stringify([
			...this.state.polls, {
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
				}]))
	}

	render() {
		let polls = JSON.parse(localStorage.getItem('polls'));
		return (
			<div>
		    	<NavBar polls={polls} voteYes={this.voteYes} voteNo={this.voteNo} killPoll={this.killPoll} addPoll={this.addPoll} />
			</div>
		);
	}
}

export default App;
