import React, { Component } from 'react';
import './App.css';
import Navigator from './Navigator'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ChipData from './ChipData'
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import LinearProgress from 'material-ui/LinearProgress';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {chipData: [
          {key: 0, label: 'React', value: 85},
          {key: 1, label: 'Javascript', value: 80},
          {key: 2, label: 'Angular', value: 70},
          {key: 3, label: 'css', value: 60},
          {key: 4, label: 'php', value: 60},
          {key: 5, label: 'APIs', value: 60},
          {key: 6, label: 'Python', value: 50},
        ],
        chipData1: [
            {key: 0, label: 'Visual Studio'}, 
            {key: 1, label: 'Nodejs'},           
            {key: 2, label: 'Android Studio'},
            {key: 3, label: 'Git'},     
            {key: 4, label: 'MySQL'}, 
            {key: 5, label: 'Photoshop'},   
            {key: 6, label: 'Illustrator'},
          ]
        };
    }

    renderLine(chipData){
        return(
            <Row>
                <Col xs={3} style={{margin: 'auto', padding: '10px'}}>
                <div style={{color: 'white', float: 'center', fontSize: 16}}>{chipData.label}</div>
                </Col>
                <Col xs={9} style={{margin: 'auto', padding: '10px',  paddingLeft: '15%'}}>
                <LinearProgress style={{float: 'left', height: 8, width:'100%',}} key={chipData.key}
                mode="determinate" value={chipData.value}/> 
                </Col>           
                          
            </Row>
            
        );        

    }

  render() {
    const style = {
        height: '100%',
        width: '100%',    
        textAlign: 'center',
        display: 'inline-block',
        opacity: 0.8
      };
    return (    
    <div className="App about">
    <Grid>    
    <Row style={{paddingBottom: '40px'}}>
        <Card className="AboutText">
            <Avatar
            src={require('./resource/avatar.png')}
            size={100}
            style={{margin: '10px', marginLeft:'0'}}
            >
            
            </Avatar>                 
            <CardTitle title="Hieu Vo" subtitle="Nick Vo" />
            <CardText style={{fontSize: 16}}>
            I am a student of Metropolia ammattikorkeakoulu at the 3rd year in IT engineering in Smart field
            and will be graduating soon. I’m studying software development, operating systems, especially,
            I am focus in learning and developing my own skills in front end (interested in cross-platform)
            and back end. There are some related projects on GitHub.The projects I’ve developed about chip boards and interacting with web application, servers and
            mobile applications. Beside that, there are also some projects with React , Angular and APIs.
            </CardText>                      
        </Card>                            
      
    </Row> 
    

    <Row>
        <Col xs={7} style={{paddingBottom: '20px'}}>
        <h3 style={{marginTop: 0, color: 'white', padding: '10px', 
        textDecoration:'underline'}}>Softwares Skills:</h3>
            <div>
            {this.state.chipData.map(this.renderLine, this)}
            </div>
            <h3 style={{marginTop: 0, color: 'white', padding: '20px', 
            textDecoration:'underline'}}>Extra:</h3>
            <ChipData chipData={this.state.chipData1}/>
        </Col>
        <Col xs={5} style={{paddingBottom: '20px'}}>
        <h3 style={{marginTop: 0, color: 'white', padding: '10px', 
        textDecoration:'underline'}}>Languages:</h3>
            <Row >
                <Col style={{color: 'white', margin: 'auto', padding: '10px', fontSize: 16}}>English
                <br/>
                <CircularProgress 
                style={{margin: 'auto'}} 
                mode="determinate" 
                size={70} 
                thickness={8} 
                value={90}
                />
                 </Col>
                 <Col style={{color: 'white', margin: 'auto', padding: 'auto', fontSize: 16}}>Finnish
                 <br/>
                 <CircularProgress 
                style={{margin: 'auto'}} 
                mode="determinate" 
                size={70} 
                thickness={8} 
                value={60}
                 />
                 </Col>                
            </Row>
            <Row>
                 <Col style={{color: 'white', margin: 'auto', padding: '10px', fontSize: 16}}>Vietnamese
                 <br/>
                 <CircularProgress 
                style={{margin: 'auto'}} 
                mode="determinate" 
                size={70} 
                thickness={8} 
                value={100}
                 />
                 </Col>
                
                 <Col style={{color: 'white', margin: 'auto', padding: 'auto',fontSize: 16}}>French
                 <br/>
                 <CircularProgress 
                style={{margin: 'auto'}} 
                mode="determinate" 
                size={70} 
                thickness={8} 
                value={35}
                 />                
                 </Col>                 
            </Row>
            </Col>    
    </Row>
    </Grid>                      
    </div>
    );
  }
}

export default About;