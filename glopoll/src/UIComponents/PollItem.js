import React from 'react';
import {
	Card,
	Button,
	Row,
	Col
} from 'react-bootstrap';
import logo from './images/logo.png';

export default class PollItem extends React.Component{
	render(){
		const { id, title, text, yesVotes, noVotes } = this.props.poll;
		return (
			<Card style={{ width: '100%' }}>
				<div className="text-center">
					<Card.Img variant="top" src={logo} style={{width:'50%'}} />
				</div>
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
							<p style={{marginTop: '10px'}}>1000 have voted</p>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		)
	}
}