import {Icon} from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ onClick, lat, lng }) => {

    return (
        <div className="location-marker cursor-pointer hover:animate-pulse">
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}


export default LocationMarker
