import React, { Component } from 'react';
import './App.css';
import Navigator from './Navigator'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';

class Footer extends Component {

  render() {
      const iconStyles = {
        marginRight: 24,
        marginLeft: 24,
        fontSize: '280%'     
      };
    return (    
    <div>
    <Grid>
    <Col xs={6}>
    <h3 style={{marginTop: 0, color: 'white', padding: '5px', textAlign: 'left', textDecoration:'underline'}}>
    Contact: </h3>
    <Row>
        <FontIcon className="material-icons" style={iconStyles} color={'#E1F5FE'}  >phonelink_ring</FontIcon>
        <h4 style={{marginTop: 0, color: 'white', padding: '5px', textAlign: 'left'}}>
        0465765152</h4>
        <FontIcon className="material-icons" style={iconStyles} color={'#E1F5FE'} >contact_mail</FontIcon>
        <h4 style={{marginTop: 0, color: 'white', padding: '5px', textAlign: 'left'}}>
        nickvo2308@gmail.com </h4>            
    </Row>
    </Col>

    <Col xs={6}>
    <h4 style={{marginTop: 0, color: 'white', padding: '5px', textAlign: 'left', marginLeft: '50px'}}>
    Refference: </h4>
    <p style={{marginTop: 0, color: 'white', padding: '5px', textAlign: 'left', marginLeft: '50px'}}>Icon By Lee Mette, DE / Background by Shutterstock 'Triangle Paper Origami Background - Left Single' </p>
    <Row>
                   
    </Row>
    </Col>
    
    
    </Grid>                      
    </div>
    );
  }
}

export default Footer;