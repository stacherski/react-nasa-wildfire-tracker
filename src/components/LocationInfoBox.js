const LocationInfoBox = ({ info }) => {
    console.log(info[0].id)
    return (
        <div className="bg-black opacity-70 p-5 rounded-lg shadow-lg shadow-black absolute z-10 top-10 left-10">
            <h2 className="font-4xl font-bold text-white">
                Event Location Info
            </h2>
            <ul className="list-none">
                <li className="text-white">ID: <span className="font-bold">{info[0].id}</span></li>
                <li className="text-white">TITLE: <span className="font-bold">{info[0].title}</span></li>
            </ul>
            
        </div >
    )
}

export default LocationInfoBox
