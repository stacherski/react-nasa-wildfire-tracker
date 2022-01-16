import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"


const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {

    const markers = eventData.map((ev) => {
        if(ev.events.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return (
            <LocationMarker key={ev.events.id} lat={ev.events.geometries[0].coordinates[1]} lng={ev.events.geometries[0].coordinates[0]} />
            )
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key : 'AIzaSyB7dhAVUjz_9v3LyefrQnz7kaz1YrEm7SA'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            
            {markers}
            
            </GoogleMapReact>        
        </div>
    )

}

Map.defaultProps = {
    center: {
        lat: 42.3465,
        lng: -122.8756
    },
    zoom: 6
}

export default Map