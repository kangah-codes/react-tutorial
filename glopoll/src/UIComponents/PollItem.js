import React from 'react';
import {
	Card,
	Button,
	Row,
	Col,
	ProgressBar
} from 'react-bootstrap';
import logo from '../logo.svg';

export default class PollItem extends React.Component{
	render(){
		const { id, title, text, yesVotes, noVotes, voted, yesPercent, noPercent, choiceOne, choiceTwo } = this.props.poll;
		return (
			<Col md="4" style={{padding: '2%'}}>
				<Card>
					<div className="text-center">
						<Card.Img variant="top" src={logo} />
					</div>
					<Card.Body>
						<Card.Title>{ title }</Card.Title>
						<Card.Text>
							{ text }
						</Card.Text>
						<Row>
							<Col>
								<Button variant="success" style={{width: '100%'}} onClick={this.props.voteYes.bind(this, id)}>{choiceOne}</Button>
							</Col>
							<Col>
								<Button variant="danger" style={{width: '100%'}} onClick={this.props.voteNo.bind(this, id)}>{choiceTwo}</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<p style={{marginTop: '10px'}}>{voted} people have voted</p>
								<p style={{marginTop: '5px'}}>
								<Row>
									<Col>
										{choiceOne}
									</Col>
									<Col>
										<ProgressBar variant="success" now={yesPercent} />
									</Col>
								</Row>
								<Row>
									<Col>
										{choiceTwo}
									</Col>
									<Col>
										<ProgressBar variant="danger" now={noPercent} />
									</Col>
								</Row>
									
								</p>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		)
	}
}