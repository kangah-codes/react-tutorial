import React from 'react';
import { 
	Navbar, Container,
	Nav, Form,
	Button, FormControl,
	Col, Row,
} from 'react-bootstrap';


export default class NavBar extends React.Component{
	constructor(){
		super();
		this.state = {

		}
	}

	// render function
	render(){
		return (
				<Navbar sticky="top"
					expand="lg"
					variant="dark"
					collapseOnSelect
					bg="dark">
					<Navbar.Brand href="#">GloPoll</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#">Home</Nav.Link>
							<Nav.Link href="#">Polls</Nav.Link>
							<Nav.Link href="#">Create</Nav.Link>
						</Nav>
						<Form inline>
							<Row className="show-grid">
								<Col className="col-8">
									<FormControl type="text" placeholder="Search" className="mr-sm-2" />
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