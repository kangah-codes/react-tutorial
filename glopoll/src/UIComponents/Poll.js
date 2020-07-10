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
			<CardGroup style={{width:'100%'}}>
				<div style={{margin: '10px', textAlign: 'center'}}>
					<PollItem key={poll.id} poll={poll}/>
				</div>
			</CardGroup>
		))
	}
}