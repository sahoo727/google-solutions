import React from 'react'
// import First from './images/deskyop.png'
// import Second from './images/Screenshot 2021-12-06 163856.png'
// import Third from './images/Profile.jpg'
import {Card} from 'react-bootstrap'
//import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import firebase from 'firebase/compat/app';
import db from '../../firebase_db';



function Cards(){
    db.collection('News DB').get().then(element => console.log(element.docs));
    
    // const firebaseApp = firebase.apps[0];
    return(
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 10 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
              {/* {JSON.stringify(firebaseApp.options, null, 2)} */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

export default Cards