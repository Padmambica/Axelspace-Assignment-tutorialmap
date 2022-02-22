/* global google */
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
import Popup from './Popup';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
        //const [open, setOpen] = useState(false);
    }
    

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props.place_,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    showDetails(details, selectedPlace) {
        //console.log(place);
        /*const { place} = selectedPlace;
        const lat = details.lat();
        const lng = details.lng();*/

       /* this.setState({
            place = selectedPlace,
            latitude = details.lat(),
            longitude = details.lng(),
        })*/
        

    };

   
    render() {
        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    className={"map"}
                    zoom={5}
                    initialCenter={this.props.center}
                >
                    {this.props.places.map((place, i) => {
                        return (
                            <Marker
                                onClick={this.onMarkerClick}
                                key={place.id}
                                place_={place}
                                position={{ lat: place.lat, lng: place.lng }}
                            />
                        );
                    })}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                            <h2>{this.state.selectedPlace.date}</h2>
                        </div>
                    </InfoWindowEx>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "###yourapikey###"
})(MapContainer)