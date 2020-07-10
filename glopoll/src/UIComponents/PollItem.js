import React from 'react';
import {
	Card,
	Button,
	Row,
	Col
} from 'react-bootstrap';
import logo from '../logo.svg';

export default class PollItem extends React.Component{
	render(){
		const { id, title, text, yesVotes, noVotes } = this.props.poll;
		return (
			<Card style={{ width: '100%' }}>
				<Card.Img variant="top" src={logo} />
				<Card.Body>
					<Card.Title>{ title }</Card.Title>
					<Card.Text>
						{ text }
					</Card.Text>
					<Row>
						<Col>
							<Button variant="success" style={{width: '100%'}}>Yes</Button>
						</Col>
						<Col>
							<Button variant="danger" style={{width: '100%'}}>No</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>1000 have voted</p>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		)
	}
}