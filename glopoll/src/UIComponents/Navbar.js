import React from 'react';
import { 
	Navbar, Container,
	Nav, Form,
	Button, FormControl,
	Col, Row,
} from 'react-bootstrap';
import Create from './Create';
import { LinkContainer } from 'react-router-bootstrap'

export default class NavBar extends React.Component{
	constructor(){
		super();
		this.state = {
			active: 'Home'
		}
	}

	pollActive = () => {
		console.log('Poll active');
	}

	createActive = () => {
		console.log('Create active');
	}

	// render function
	render(){
		return (
			<Navbar sticky="top"
				expand="lg"
				variant="dark"
				collapseOnSelect
				bg="dark">
				<Navbar.Brand >GloPoll</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<LinkContainer exact to="/">
							<Nav.Link >Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/create" component={Create}>
							<Nav.Link>Create</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form inline>
						<Row className="show-grid">
							<Col className="col-8">
								<FormControl type="text" placeholder="Search for a Poll" className="mr-sm-2" />
							</Col>
							<Col className="col-4">
								<Button variant="outline-primary">Search</Button>
							</Col>
						</Row>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}