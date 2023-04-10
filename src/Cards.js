import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HoverVideoPlayer from 'react-hover-video-player';
import img1 from './avatar1.jpg';
import img2 from './avatar2.jpg';
import img3 from './avatar3.jpg';
import vd from './avatar.mp4';
import vd1 from './avatar2.mp4';
import './Cards.css';
function Cards() {
  return (
    <div>
    <CardGroup>
      <Card style={{height:"350px"}}>
      <HoverVideoPlayer
      videoSrc={vd}
      pausedOverlay={
        <Card.Img style={{height:'350px'}} className='image' variant="top" src={img1} />

      }/>
        <Card.Body style={{position:"absolute", marginTop:'200px', color:'white'}}>
          <Card.Title>Avatar3</Card.Title>
          <Card.Text style={{marginBottom:'15px'}}>
            This is a wider card with supporting text below as a natural lead-in
          
          </Card.Text>
          <div>
          <button className='btn1'>More Info</button>
          <button className='btn2'>Purchase</button>
        </div>
        </Card.Body>
        
      </Card>
      <Card style={{height:"350px"}}>
      <HoverVideoPlayer
      videoSrc={vd1}
      pausedOverlay={
        <Card.Img style={{height:'350px'}} className='image' variant="top" src={img3} />

      }/>
        <Card.Body style={{position:"absolute", marginTop:'200px', color:'white'}}>
          <Card.Title>Avatar1</Card.Title>
          <Card.Text style={{marginBottom:'15px'}}>
            This is a wider card with supporting text below as a natural lead-in
            
          </Card.Text>
          <div>
          <button className='btn1'>More Info</button>
          <button className='btn2'>Purchase</button>
        </div>
        </Card.Body>
       
      </Card>
      <Card style={{height:"350px"}}>
      <HoverVideoPlayer
      videoSrc={vd}
      pausedOverlay={
        <Card.Img style={{height:'350px'}} className='image' variant="top" src={img2} />

      }/>
        <Card.Body style={{position:"absolute", marginTop:'200px', color:'white'}}>
          <Card.Title>Avatar2</Card.Title>
          <Card.Text style={{marginBottom:'-20px'}}>
            This is a wider card with supporting text below as a natural lead-in
            
          </Card.Text>
          <div>
          <button className='btn1'>More Info</button>
          <button className='btn2'>Purchase</button>
        </div>
        </Card.Body>
      </Card>
    </CardGroup>

    </div>
  );
}

export default Cards;