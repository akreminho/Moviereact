import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Search.css";
function Search() {
    return (
        <>
    <div className='Navi'>
          <Navbar bg="transparent" text="warning">
            <Container>
              <Nav className="me-auto" >
                <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
                <Nav.Link href="#features" style={{color:'white'}}>New Series</Nav.Link>
                <Nav.Link href="#pricing" style={{color:'white'}}>Upcoming</Nav.Link>
                <Nav.Link href="#pricing" style={{color:'white'}}>New Movies</Nav.Link>

              </Nav>
            </Container>
          </Navbar>
          </div>
        </>
      );
    }

export default Search;