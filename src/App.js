import {useState, useEffect } from 'react'
import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      .then(res => res.json())
      .then(data => {
        setEventData(data)
        setLoading(false)
        console.log(data)
      })
      .catch(err => console.error(err))
    }, [])
  
  return (
    <div>
      {loading ? <h1 className="text-6xl text-center my-10">Loading wildfire data...</h1> : <Map eventData={eventData} /> }
    </div>
  )
}

export default App;
