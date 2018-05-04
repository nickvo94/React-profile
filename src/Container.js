import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import GoogleApiComponent from 'google-maps-react'

export default class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div  style={style}>
              <Map google={this.props.google} />
            </div>
        )
    }
}
  
//   export default GoogleApiComponent({
//     apiKey: 'AIzaSyA2yshFo61uXWl6sHyGLONWZDdkpIfpEm0'
//   })(Container)