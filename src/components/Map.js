import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import LocationInfoBox from "./LocationInfoBox"

const Map = ({ eventData, center, zoom }) => {

    const markers = eventData.map((ev, index) => {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}/>
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
        lat: 51.127057,
        lng: 16.9218248
    },
    zoom: 5
}

export default Map