import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};
 
const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};
 
export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          markers: []
      }
  }
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (
        <div>
                <input type='button' value='Load' onClick={() => this.setState({
                    markers: [
                        { lat: 51.5258541, lng: -0.09040660000006028 },
                        { lat: 51.5358541, lng: -0.08540660000006028 },
                        { lat: 51.5158541, lng: -0.087040660000006028 },
                        { lat: 51.5458541, lng: -0.08640660000006028 }
                    ]
                })}/>
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {this.state.markers.map(marker => <Marker
          lat={marker.lat}
          lng={marker.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />)}
      </Gmaps>
      </div>
    );
  }
}