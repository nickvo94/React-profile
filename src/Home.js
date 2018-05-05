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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import ChipData from './ChipData';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {chipData: [
          {key: 0, label: 'ReactJS'},
        ],
        chipData1: [
            {key: 0, label: 'APIs'},
            {key: 1, label: 'Material-UI'},
            {key: 2, label: 'Table'},
            {key: 3, label: 'ReactJS'},
          ]
        };
        
      }
    
      //https://github.com/perseus0832/React-profile/blob/master/src/resource/todolist.PNG?raw=true
    render() {
        return (
        <div className="App home" >
        <Grid>
            <h2 style={{marginTop: 0, color: 'black', padding: '20px', textAlign: 'center'}}>
            Home Page</h2>
            <h3 style={{marginTop: 0, color: 'black', padding: '10px', textAlign: 'center'}}>
            *Press on the pictures to follow the links or check Github page under the link tab</h3>
            <h3 style={{marginTop: 0, color: 'black', padding: '20px', textAlign: 'center'}}>
            Contact infomation at the bottom</h3>
            <Row>                         
                <Col xs={6}>
                <Card className="GeneralCard">
                <div className="header"
                ><div className="title">Simple todolist</div></div>                
                <a href="https://perseus0832.github.io/React-table-todolist/">                  
                    <CardMedia>                  
                        <img style={{width:'100%', margin: 'auto', marginBottom: '0px' }}
                        crossOrigin={null} 
                        src={require('./resource/todolist.PNG')} alt=" " />                   
                    </CardMedia>
                </a>                                      
                </Card>                                               
                </Col>
                <Col xs={6}>
                <Card className="GeneralCard">
                <div className="header"
                ><div className="title">List of Participants</div></div>
                <a href="https://perseus0832.github.io/ReactApp/">                    
                    <CardMedia>                                            
                        <img style={{width:'80%', margin: 'auto', marginBottom: '0px' }} 
                        src={require('./resource/list-react.PNG')} alt=" " />                                           
                    </CardMedia>
                </a>                  
                </Card>                 
                </Col>
            </Row>
            <Row >
                <Col xs={12}>
                <Card className="GeneralCard">
                <div className="header"
                ><div className="title">React Basic with APIs</div></div>
                <a href="https://perseus0832.github.io/React-basic-api/">                       
                    <CardMedia>                                            
                        <img style={{ margin: 'auto', marginBottom: '0px' }} 
                        src={require('./resource/react-basic.png')} alt=" " />                                          
                    </CardMedia>
                </a> 
                    <div className = 'footer'>
                        <ChipData chipData={this.state.chipData1}/>
                    </div>    
                                    
                </Card>                 
                </Col>
            </Row>

            <Row>
            <Col xs={12}>
            <Card className="GeneralCard">
            <div className="header">
            <div className="title">Realtime Application</div></div>
                <Row>
                    <Col xs={4}>                         
                        <li style={{marginTop: '5%'}}>Translating speeches automatically or maually and sending to the chat box</li>
                    </Col>         
                    <Col xs={8}>
                    <Card className="SideCard">
                    <a href="https://users.metropolia.fi/~hieuv/API_labs/GTransTrial/GTranslate/test1.html">                                         
                        <CardMedia>                                                   
                            <img style={{width:'80%', margin: 'auto', marginBottom: '0px' }} 
                            src={require('./resource/realtime-speech.PNG')} alt=" " />                                              
                        </CardMedia>
                    </a> 
                                        
                    </Card>                                               
                    </Col>
                </Row>    
            </Card>
            </Col>
            </Row>

            <Row>
            <Col xs={12}>
            <Card className="GeneralCard">
            <div className="header">
            <div className="title">Sauna Monitor</div></div>
                <Row>         
                    <Col xs={8}>
                    <Card className="SideCard">
                    <a href="http://users.metropolia.fi/~hieuv/tempLog.php">                                          
                        <CardMedia>                                               
                            <img style={{width:'80%', margin: 'auto', marginBottom: '0px' }} 
                            src={require('./resource/sauna_project.png')} alt=" " />                                               
                        </CardMedia>
                    </a>                                        
                    </Card>                                               
                    </Col>
                    <Col xs={4}>                         
                        <li style={{marginTop: '5%'}}>Monitoriing temperature and moisture by web and mobile</li>
                    </Col>
                </Row>    
            </Card>
            </Col>
            </Row>


            </Grid>              
        </div>
        );
    }
    }

    export default Home;