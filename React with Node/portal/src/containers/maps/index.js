import React from 'react';
import MapComponent from './mapcomponent';
 
export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          markers: [],
          isVisible: false
      }
  }
  render() {
    return (
        <div>
                <input type='button' value='Load' onClick={() => this.setState({
                    markers: [
                        { lat: 51.5558541, lng: -0.09540660000006028 },
                        { lat: 51.5258541, lng: -0.09040660000006028 },
                        { lat: 51.5358541, lng: -0.08540660000006028 },
                        { lat: 51.5158541, lng: -0.087040660000006028 },
                        { lat: 51.5458541, lng: -0.08640660000006028 }
                    ],
                    isVisible: true
                })}/>
                {this.state.isVisible && <MapComponent markers={this.state.markers} zoom={10}/>}
      </div>
    );
  }
}