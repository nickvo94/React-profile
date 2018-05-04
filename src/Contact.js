import React, { Component } from 'react';
import './App.css';
import Navigator from './Navigator'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Container from './Container'
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Contact extends Component {
  render() {
    const style = {
      height: '80%',
      width: '80%',
      margin: 'auto',
      paddingBottom: '3%',
      textAlign: 'center',
      display: 'inline-block',
      opacity: 0.6,
    };

    return (
      <div className="App contact">
        <Grid>
          <h2 style={{marginTop: 0, color: 'white', padding: '40px'}}>Contact</h2>        
        <Row style={{paddingBottom: '10px'}}>                  
          <Paper style={style} zDepth={5} circle={true}>
            <div style={{padding: '3%', margin: '1%'}}>
              <h3>Phone: </h3>
              <h4>0465765152</h4>
              <h3>Email: </h3>
              <h4>nickvo2308@gmail.com</h4>
            </div>            
          </Paper>
                   
        </Row>         
        </Grid>           
      </div>
    );
  }
}

export default Contact;