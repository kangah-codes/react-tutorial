import React from 'react';
import {
	CardGroup,
	Col,
	Row
} from 'react-bootstrap';
import PollItem from './PollItem';

export default class Poll extends React.Component{
	render() {
		return this.props.polls.map((poll) => (
			<PollItem key={poll.id} poll={poll} voteYes={this.props.voteYes} voteNo={this.props.voteNo} />
		))
	}
}