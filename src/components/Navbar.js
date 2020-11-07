import React, {useState} from 'react'
import {Button, Nav, Navbar, Form, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function NaviBar() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Navbar.Brand>Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/users'>User</Link></Nav.Link>
                        <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant='primary' className='mr-2' onClick={handleShow}>Log in</Button>
                        <Button variant='primary' onClick={handleShow}>Sign out</Button>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text className='text-muted'>
                                We`ll never share your email with anyone people
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter Password'/>
                        </Form.Group>
                        <Form.Group controlId='fromBasicCheckbox'>
                            <Form.Check type='checkbox' label='Remember me'/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}